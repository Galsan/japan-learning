import { useState } from "react";
import UserList from "@/components/userList";
import Navbar from "@/components/Navbar";
import AdminNav from "@/components/AdminNav";
const AdminHome = () => {
    const [currentMenu, setCurrentMenu] = useState("user");

    return (
        <div className="w-full flex flex-col">
            <AdminNav />
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

export default AdminHome