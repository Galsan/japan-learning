// pages/api/upload.js
import formidable from 'formidable';
import fs from 'fs';
import { getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';
import { TeacherRequest } from '../models';
import path from 'path';

export const config = {
    api: {
        bodyParser: false,
    },
};
//todo there is API resolved without sending a response for /api/teacherRequest, this may result in stalled requests.
export default async function handler(req, res) {
    const form = formidable({});

    const session = await getServerSession(req, res, authOptions);
    const userId = session?.user?.id || "someone";

    let fields;
    let files;

    try {
        [fields, files] = await form.parse(req);
    } catch (err) {
        // example to check for a very specific error
        if (err.code === formidableErrors.maxFieldsExceeded) {
        }
        res.status(err.httpCode || 400).json(String(err));
        return;
    }


    try {
        // const newTeacherRequest = new TeacherRequest({
        //     _userId: userId,
        //     firstName: fields.firstName[0],
        //     lastName: fields.lastName[0],
        //     occupation: fields.occupation[0],
        //     status: "new"
        // });

        // await newTeacherRequest.save();
        console.log("it is files", files)

        const personalIdentificationfile = files.personalIdentificationFile[0];
        console.log("it is personalIdentificationfile is originalFileName", personalIdentificationfile.originalFilename)

        const personalIdentificationExtenstion = path.extname(personalIdentificationfile.originalFilename);
        const diplomaIdentificationfile = files.diplomaFile[0];
        const diplomaExtension = path.extname(diplomaIdentificationfile.originalFilename);

        console.log("its extention", personalIdentificationExtenstion);

        const filter = {
            _userId: userId
        }

        const update = {
            _userId: userId,
            firstName: fields.firstName[0],
            lastName: fields.lastName[0],
            occupation: fields.occupation[0],
            personalIdentificationExtenstion: personalIdentificationExtenstion,
            diplomaExtension: diplomaExtension,
            status: "new"
        }

        const newTeacherRequest = await TeacherRequest.updateOne(filter, update, { upsert: true });

        const personalOldPath = personalIdentificationfile.filepath;
        const personalNewPath = `./public/uploads/personalIdentification/${userId + personalIdentificationExtenstion}`;
        const diplomaOldPath = diplomaIdentificationfile.filepath;
        const diplomaNewPath = `./public/uploads/diplomaFile/${userId + diplomaExtension}`;

        fs.rename(personalOldPath, personalNewPath, (err) => {
            if (err) {
                console.log("Error on file saving", err)
                res.status(500).json({ message: 'Error while saving file', err });
            };
        });
        
        fs.rename(diplomaOldPath, diplomaNewPath, (err) => {
            if (err) {
                console.log("Error on file saving", err)
                res.status(500).json({ message: 'Error while saving file', err });
            };
            res.status(200).json({ message: 'Form submitted successfully', newTeacherRequest });
        });

        return;
    } catch (error) {
        console.log("Error on mongoDb", error)
        res.status(500).json({ message: 'Error while saving in DB', error });
    }
}
