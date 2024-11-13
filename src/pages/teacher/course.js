import useSWR from 'swr';
import { useState } from 'react';
import Modal from '@/components/modal/modal';
import AuthenticatedNav from "@/components/AuthenticatedNav";

export default function Course() {
    const [open, setOpen] = useState(false);

    const { data: courseList, error, isLoading: userLoading } = useSWR(`http://localhost:3000/api/course/findCourseByTeacher`);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const body = {
            courseName: formData.get("courseName"),
            description: formData.get("description"),
            wholeDuration: formData.get("wholeDuration"),
            durationOfEachClass: formData.get("durationOfEachClass"),
            thumbnailUrl: formData.get("thumbnailUrl")
        };

        const res = await fetch('/api/course/saveCourse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (res.ok) {
            setOpen(false);
            alert('Saved your course');
        }
        if (res.error) {
            console.log("there is error", res.error)
            alert("this is error", res.error)
        }

        const data = await res.json();
        console.log(data);
    };

    if (error) return <div>Error</div>
    if (userLoading) return <div>Loading...</div>;

    return (
        <div>
            <AuthenticatedNav role="teacher" />
            <div className='p-10'>
                <div className='w-full flex justify-end'>
                    <button className='bg-green-400' onClick={() => setOpen(true)}>Add course</button>
                </div>
                its the idk course
                {courseList && (
                    <div>
                        <h1>
                            My Course List
                        </h1>
                        <ul>
                            {
                                courseList.courses.map((e) => {
                                    <li>{e.name}</li>
                                })
                            }
                        </ul>
                    </div>
                )}
                {/* name: String,
                  description: String,
                  _teacherId: Schema.Types.ObjectId,
                  wholeDuration: Number,
                  durationOfEachClass: Number,
                  thumbnail_url: String */}
                <Modal open={open} onClose={() => { setOpen(false) }} >
                    <div className='flex justify-center'>
                        <form onSubmit={handleSubmit} className='w-3/5 mt-8 text-xl text-black font-semibold flex flex-col'>
                            {/* <label for="html">HTML</label> */}
                            <input type="text" className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md" placeholder='courseName' name="courseName" id="courseName" />
                            <input type="text" className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md" placeholder='description' name="description" id="description" />
                            <input type="text" className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md" placeholder='WholeDuration' name="wholeDuration" id="wholeDuration" />
                            <input type="text" className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md" placeholder='DurationOfEachClass' name="durationOfEachClass" id="durationOfEachClass" />
                            <input type="text" className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md" placeholder='thumbnailUrl' name="thumbnailUrl" id="thumbnailUrl" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </Modal>
            </div>
        </div>
    )
}