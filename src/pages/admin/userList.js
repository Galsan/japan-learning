import { useState } from "react";
import UserList from "@/components/userList";
import AuthenticatedNav from "@/components/AuthenticatedNav";
import withAuth from "@/components/withAuth";

const AdminUserList = () => {
    const [currentMenu, setCurrentMenu] = useState("user");

    return (
        <div className="w-full flex flex-col">
            <AuthenticatedNav />
            <div>
                <div className="flex justify-around pt-2">
                    <button onClick={() => setCurrentMenu("user")}>Хэрэглэгчийн жягсаалт</button>
                    <button onClick={() => setCurrentMenu("teacher")}>Багшийн жягсаалт</button>
                </div>
                <UserList role={currentMenu}></UserList>
            </div>
        </div>
    );
}

export default withAuth(AdminUserList, ['admin'])