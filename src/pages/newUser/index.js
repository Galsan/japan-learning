import { useState } from 'react';
import { useRouter } from 'next/router';

const NewUser = () => {
    const router = useRouter();
    const { email } = router.query;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);


        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Save user password and additional info to the database
        const response = await fetch('/api/userCrud/saveNewUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data.getAll),
        });

        if (response.ok) {
            router.push('/');
        } else {
            alert('Error saving user information');
        }
    };

    return (
        <div>
            <h1>Welcome, new user!</h1>
            <form onSubmit={handleSubmit}>
                <input type="hidden" value={email} />
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewUser;
