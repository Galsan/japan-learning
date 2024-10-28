import { getSession } from "next-auth/react";
import useSWR from "swr";
import Carousel from "@/components/carousel/carousel";
import AuthenticatedNav from "@/components/AuthenticatedNav";
import { useEffect, useState } from "react";

const UserProfile = () => {
    const [cardData, setCardData] = useState();

    const videoId = "tOBIdgwDYH0";

    const { data: session, isLoading } = useSWR('/api/auth/session', getSession);
    const fetcher = (url) => fetch(
        url,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then((res) => res.json());


    const { data: lessonData, error: lessonDataFetchError, isLoading: lessonLoading } = useSWR('http://localhost:3000/api/course/findByUser', fetcher);


    useEffect(() => {
        const courseNames = lessonData?.data ? lessonData?.data.map((e) => {
            return e.name;
        }) : null;
        console.log("idk but working in useEffect")
        setCardData(courseNames);
    }, [lessonData]);

    console.log("Lesson data", lessonData?.data ? lessonData?.data[0] : "hhe")
    console.log("Card data", cardData)


    if (isLoading || lessonLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <AuthenticatedNav role="user" />
            <h1>User Profile</h1>
            <p>User ID: {session?.user?.username}</p>
            <div className="container mx-auto p-4 flex px-12">
                <h1>
                    Миний Хичээл<br />
                </h1>
            </div>
            <div className="container mx-auto p-4">
                <Carousel
                    cardData={cardData} />
            </div>

            <div className="container mx-auto p-4 flex px-12">
                <h1>
                    Санал болгох хичээл<br />
                </h1>
            </div>
            <div className="container mx-auto p-4">
                <Carousel
                    cardData={cardData} />
            </div>
            <iframe id="ytplayer" className="" type="text/html" width="100%"
                height="360"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
                frameborder="0"
            ></iframe>
        </div>
    );
};

export default UserProfile;

