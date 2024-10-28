import { signOut } from 'next-auth/react';

const MyComponent = () => {
    signOut({ callbackUrl: '/' }); // Redirect to home page after sign out
};

export default MyComponent;
