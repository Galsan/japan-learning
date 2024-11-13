import AuthenticatedNav from "@/components/AuthenticatedNav";
import WithAuth from "@/components/withAuth";

const TeacherHome = () => {
    return (
        <div className="w-full flex flex-col">
            <AuthenticatedNav role="teacher" />
            <div>
                This is teacher home page
            </div>
        </div>
    );
}

export default WithAuth(TeacherHome, ['teacher'])