import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import useSWR from 'swr';

const withAuth = (Component, allowedRoles) => {
  const AuthComponent = (props) => {
    const { data: session, isLoading } = useSWR('/api/auth/session', getSession);

    const router = useRouter();

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (!session) {
      console.log("why there is no session", session)
      // User is not logged in, redirect to login page
      if (typeof window !== 'undefined') {
        router.push('/auth/signIn');
      }
      return null;
    }

    const userRole = session.user.role; // Assuming user role is available in session

    if (!allowedRoles.includes(userRole)) {
      // User role is not allowed, redirect to appropriate page
      if (typeof window !== 'undefined') {
        router.push('/');
      }
      return null;
    }

    return <Component {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
