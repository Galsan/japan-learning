// pages/api/upload.js
import formidable from 'formidable';
import fs from 'fs';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    const form = formidable({});
    let fields;
    let files;
    try {
        [fields, files] = await form.parse(req);
    } catch (err) {
        // example to check for a very specific error
        if (err.code === formidableErrors.maxFieldsExceeded) {

        }
        console.error(err);
        res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
        res.end(String(err));
        return;
    }


    const oldPath = files.file[0].filepath;
    const newPath = `./public/uploads/teacherRequests/${files.file[0].originalFilename}`;

    fs.rename(oldPath, newPath, (err) => {
        if (err) throw err;
        res.status(200).json({ message: 'Form submitted successfully' });
    });

    return;
}



    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.end(`
    //   <h2>With Node.js <code>"http"</code> module</h2>
    //   <form action="/api/upload" enctype="multipart/form-data" method="post">
    //     <div>Text field title: <input type="text" name="title" /></div>
    //     <div>File: <input type="file" name="multipleFiles" multiple="multiple" /></div>
    //     <input type="submit" value="Upload" />
    //   </form>
    // `);