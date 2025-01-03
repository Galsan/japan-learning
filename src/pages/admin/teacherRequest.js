import { useState, useEffect } from "react";
import AuthenticatedNav from "@/components/AuthenticatedNav";
import WithAuth from "@/components/withAuth";
import useSWR from "swr";
import Modal from "@/components/modal/modal";
import Image from "next/image";
import { getSession } from "next-auth/react";

const AdminUserList = () => {
    const [open, setOpen] = useState(false);
    const [currentRequest, setCurrentRequest] = useState({});
    const [files, setFiles] = useState([]);
    const session = getSession();

    useEffect(() => { if (open) { fetchFiles(); } }, [open]);
    const fetchFiles = async () => {
         const response = await fetch('/api/files'); 
         const data = await response.json(); 
         setFiles(data); 
        };

    let ctr = 0;
    const { data: teacherRequestList, error, isLoading } = useSWR(`http://localhost:3000/api/admin/getTeacherRequest`);

    if (isLoading) {
        return <div>loading</div>
    }
    if (error) {
        return <div>Error</div>
    }

    const modalOperation = ()=>{
        ctr++;
        console.log("testing that shit is possible", ctr)
    }

    return (
        <div className="w-full flex flex-col">
            <AuthenticatedNav role="admin" />
            <div>
                <div className="flex justify-around pt-2">
                    <button>Багшийн хүсэлт</button>
                </div>
                <div className="w-full p-4">
                    <table className="table-auto w-full ">
                        <thead>
                            <tr className="">
                                <th className="w-1/12 border-slate-400 border-spacing-2 border-4 text-center">#</th>
                                <th className="w-3/12 border-slate-400 border-spacing-2 border-4 text-center">First Name</th>
                                <th className="w-3/12 border-slate-400 border-spacing-2 border-4 text-center">Last Name</th>
                                <th className="w-3/12 border-slate-400 border-spacing-2 border-4 text-center">Occupation</th>
                                <th className="w-2/12 border-slate-400 border-spacing-2 border-4 text-center">Requested Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                teacherRequestList.teacherRequests.map((el) => {
                                    ctr++;
                                    return (
                                        <tr key={el._id} className="hover:bg-gray-600 cursor-pointer" onClick={()=> {
                                            setCurrentRequest(el);
                                            setOpen(true);
                                        }}>
                                            <td className="w-1/12 border-slate-400 border-spacing-2 border-4 text-center">{ctr}</td>
                                            <td className="w-3/12 border-slate-400 border-spacing-2 border-4 text-center">{el.firstName}</td>
                                            <td className="w-3/12 border-slate-400 border-spacing-2 border-4 text-center">{el.lastName}</td>
                                            <td className="w-3/12 border-slate-400 border-spacing-2 border-4 text-center">{el.occupation}</td>
                                            <td className="w-2/12 border-slate-400 border-spacing-2 border-4 text-center">{el.updatedDate}</td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal open={open} onClose={() => { setOpen(false) }}>
                <div>
                    <p>First Name : {currentRequest.firstName}</p>
                    <p>Last Name : {currentRequest.lastName}</p>
                    <p>Occupation : {currentRequest.occupation}</p>

                    <iframe src="C:\Users\Galsan Bayart\OneDrive\Documents\Lesson\books\Basic Kanji Book.pdf" className="w-1/3 h-1/6" title={currentRequest.occupation}></iframe>
                    
                    {/* <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px' }}> 
                        {files.length > 0 ? 
                        ( files.map(file => ( 
                            <div key={file.name}> {file.url.endsWith('.pdf') ? 
                                ( <iframe src={file.url} className="w-full h-auto" title={file.name}></iframe> ) : 
                                ( <Image src={file.url} alt={file.name} width={300} height={200} /> )} 
                            </div> )) ) : 
                        ( <p>No files available</p> )} </div> */}
                    <button className="w-28 bg-cyan-900" onClick={modalOperation}>Test</button>
                </div>
            </Modal>
        </div>
    );
}

export default WithAuth(AdminUserList, ['admin'])