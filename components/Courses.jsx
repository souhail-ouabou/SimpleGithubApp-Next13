'use client'
import { Card } from "flowbite-react";
import Link from "next/link";

const Courses = async ({courses}) => {
    return (
       <>
            {courses.map((course) => (
                <Card key={course.id} className='border border-gray-400 mb-2 py-5 px-4 rounded-lg' >
                    <h5 className="text-2xl font-bold tracking-tight dark:text-white text-gray-700">
                        {course.title}
                    </h5>
                    <small className="dark:text-white">Level: {course.level}</small>
                    <p className="font-normal dark:text-gray-400">
                        <p>{course.description}</p>
                    </p>
                    <Link href={course.link} target='_blank' className="w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >
                        Go To Course
                    </Link>
                </Card>

            ))}

        </>
    )
    return <div>Courses</div>;
};

export default Courses;
