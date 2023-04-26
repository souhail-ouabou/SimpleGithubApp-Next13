'use client';
import { useState, useEffect } from 'react';
import LoadingPage from './loading';

import Courses from '@/components/Courses';
import CourseSearch from '@/components/CourseSearch';
const Homepage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  return <>
    <div className="mx-auto container py-[5.75rem] px-6">
    <h2 className='text-center font-semibold text-xl mb-5 text-black'>Welcome to Shlo app</h2>
    <CourseSearch getSearchResults={(results) => setCourses(results)} />
    <Courses courses={courses} />
    </div>

  </>;
};

export default Homepage;
