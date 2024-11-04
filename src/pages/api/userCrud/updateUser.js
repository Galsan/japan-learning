import { connectToDB } from "@/pages/utils/mongooseImp";
import { User } from "@/pages/models";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        await connectToDB();

        try {
            const result = await User.aggregate([
                { $match: { role: "user" } },
                {
                    $addFields: {
                        username: {
                            $concat: [
                                { $toLower: { $arrayElemAt: [{ $split: ["$name", " "] }, 0] } }, // "cillian"
                                { $arrayElemAt: [{ $split: ["$name", " "] }, 1] }  // "murphy"
                            ]
                        }
                    }
                },
                {
                    $merge: {
                        into: "users", // Replace with your collection name
                        whenMatched: "merge", // Merge the new field into existing documents
                        whenNotMatched: "insert" // Insert as new document if not matched (optional)
                    }
                }]);

            console.log("whats upp , ", result)

            res.status(201).json(
                { message: 'User updated successfully', matched: result.matchedCount, modified: result.modifiedCount });
        } catch (error) {
            res.status(500).json({ message: 'Error updating user', error });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}



// export default async function handler(req, res) {
//     if (req.method === 'GET') {
//         await connectToDB();

//         try {
//             const result = await User.updateMany({ username: { "$in": ["galsan", "zulsar"] } }, { role: "admin" });

//             res.status(201).json(
//                 { message: 'User updated successfully', matched: result.matchedCount, modified: result.modifiedCount });
//         } catch (error) {
//             res.status(500).json({ message: 'Error updating user', error });
//         }
//     } else {
//         res.setHeader('Allow', ['GET']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }