import useSWR from "swr";

const UserList = ({ role }) => {

    const { data: userList, error, isLoading } = useSWR(`http://localhost:3000/api/admin/findUserByRole/${role}`);
    let ctr = 0;

    if (error) return <div>Хэрэглэгчийн лист</div>
    if (isLoading) return <div>Loading...</div>;


    console.log("its the user List ", userList)
    return (
        <div className="w-full p-4">
            <table className="table-auto w-full ">
                <thead>
                    <tr className="">
                        <th className="w-1/12 border-slate-400 border-spacing-2 border-4 text-center">#</th>
                        <th className="w-3/12 border-slate-400 border-spacing-2 border-4 text-center">Username</th>
                        <th className="w-4/12 border-slate-400 border-spacing-2 border-4 text-center">Email</th>
                        <th className="w-4/12 border-slate-400 border-spacing-2 border-4 text-center">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.users.map((el) => {
                        ctr++;
                        return (
                            <tr key={el._id} className="">
                                <td className="w-1/12 border-slate-400 border-spacing-2 border-4 text-center">{ctr}</td>
                                <td className="w-3/12 border-slate-400 border-spacing-2 border-4 text-center">{el.username}</td>
                                <td className="w-4/12 border-slate-400 border-spacing-2 border-4 text-center">{el.email}</td>
                                <td className="w-4/12 border-slate-400 border-spacing-2 border-4 text-center">{el.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserList