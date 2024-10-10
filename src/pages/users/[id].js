import { useRouter } from 'next/router';

const UserProfile = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>User Profile</h1>
            <p>User ID: {id}</p>
        </div>
    );
};

// export async function getStaticPaths() {
//     // Fetch user IDs from your data source (e.g., an API or database)
//     const userIds = ['123', '456', '789']; // Replace with actual data

//     const paths = userIds.map((id) => ({
//         params: { id },
//     }));

//     return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//     // Fetch user data based on the ID (params.id)
//     // ...

//     return {
//         props: {
//             user: {
//                 id: params.id,
//                 // Other user data
//             },
//         },
//     };
// }

export default UserProfile;

