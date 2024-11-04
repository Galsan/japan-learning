import AuthenticatedNav from "@/components/AuthenticatedNav";
import { getSession } from "next-auth/react";
import { useState } from "react";
import useSWR from "swr";


const UserProfile = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { data: session, isLoading } = useSWR('/api/auth/session', getSession);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('New passwords do not match');
            return;
        }

        const response = await fetch('/api/change-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ oldPassword, newPassword }),
        });

        if (response.ok) {
            alert('Password changed successfully');
        } else {
            alert('Error changing password');
        }
    };

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <AuthenticatedNav role="user" />

            <div className="max-w-md mx-auto mt-10">
                <h2 className="text-2xl font-bold mb-5">User Information</h2>

                <p>Username: {session?.user?.username}</p>
                <p>Email: {session?.user?.email}</p>
            </div>
            <div className="max-w-md mx-auto mt-10">
                <h2 className="text-2xl font-bold mb-5">Change Password</h2>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Old Password
                        </label>
                        <input
                            type="password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            New Password
                        </label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Confirm New Password
                        </label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Change Password
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UserProfile;

