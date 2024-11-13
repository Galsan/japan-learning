import fs from 'fs';
import path from 'path';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req, res){
    const session = await getServerSession(req, res, authOptions);
//session?.user?.id 
    const diplomaName = "671067d3a3309e8a87625afc.jpg";
    const pidName = "671067d3a3309e8a87625afc.jpg";

    const diplomaPath = path.resolve('.', 'public/uploads/diplomaFile', diplomaName);
    const pidPath = path.resolve('.', 'public/uploads/personalIdentification', pidName);

    console.log("diplomaPath ", diplomaPath) ;
    console.log("pidPath ", pidPath) ;

    if(fs.existsSync(diplomaPath) || fs.existsSync(pidPath)){
        res.status(200).json({diplomaPath, pidPath})
    }
    res.status(404).json({ Message : "Not Found"});
}
