'use client';
import { Button, TextInput } from 'flowbite-react';
import { useState } from 'react';

const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
   e.preventDefault();
    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses = await res.json();
    getSearchResults(courses);
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4 gap-2">
       <TextInput
        type='text'
        className='w-[90%]'
        placeholder='Search Courses...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button  type='submit'>
        Search
      </Button>
    </form>
  );
};
export default CourseSearch;
