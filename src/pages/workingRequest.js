import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthenticatedNav from "@/components/AuthenticatedNav";

const CredentialsForm = () => {
    const router = useRouter();
    const [error, setError] = useState(null);
    const [file, setFile] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append('file', file)

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });


        if (response.ok) {
            alert('Saved your request');
            router.push('/user');
        } else {
            setError(response.error)
            alert('Error while saving file');
        }
    };

    return (
        <div>
            <AuthenticatedNav role="user" />

            <div className="w-full flex justify-center">
                <form
                    className="w-3/5 mt-8 text-xl text-black font-semibold flex flex-col"
                    onSubmit={handleSubmit}
                >
                    {error && (
                        <span className="p-4 mb-2 text-lg font-semibold text-white bg-red-500 rounded-md">
                            {error}
                        </span>
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
                    />
                    <input
                        type="text"
                        name="text"
                        placeholder="Text"
                        required
                        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
                    />
                    <input
                        id="fileInput"
                        type="file"
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        placeholder="Upload file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <button
                        type="submit"
                        className="w-full h-12 px-6 mt-4 text-lg text-white transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
                    >
                        SAVE
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CredentialsForm;