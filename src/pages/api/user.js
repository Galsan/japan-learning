export default function handler(req, res) {
    // Simulate a list of users (you can replace this with your actual data)
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
    ];

    // Respond with the list of users as JSON
    res.status(200).json(users);
}