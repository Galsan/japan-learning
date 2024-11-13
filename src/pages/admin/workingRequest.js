import { useState } from "react";
import UserList from "@/components/userList";
import AuthenticatedNav from "@/components/AuthenticatedNav";
import WithAuth from "@/components/withAuth";
import useSWR from "swr";

const AdminUserList = () => {
    const [currentMenu, setCurrentMenu] = useState("user");
    let ctr = 0;

    const { data: teacherRequestList, error, isLoading } = useSWR(`http://localhost:3000/api/admin/getTeacherRequest`);

    console.log(teacherRequestList);
    if (isLoading) {
        return <div>loading</div>
    }
    if (error) {
        return <div>Error</div>
    }

    return (
        <div className="w-full flex flex-col">
            <AuthenticatedNav role="admin" />
            <div>
                <div className="flex justify-around pt-2">
                    <button onClick={() => setCurrentMenu("user")}>Багшийн хүсэлт</button>
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
                                        <tr key={el._id} className="">
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
        </div>
    );
}

export default WithAuth(AdminUserList, ['admin'])