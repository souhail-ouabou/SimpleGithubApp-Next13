'use client'
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import { Card } from 'flowbite-react/lib/esm/components';

async function fetchRepos( ) {
  const response = await fetch(
    'https://api.github.com/users/bradtraversy/repos'
  );
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <>
      <div className="mx-auto container py-2 px-6">
      <h2 className='text-center font-semibold text-xl mt-14 mb-5 text-black'>Repositories</h2>
        {repos.map((repo) => (
            <Card className='border border-gray-400 mb-2 py-5 px-4 rounded-lg'  key={repo.id}  href={`/code/repos/${repo.name}`}>       
            <h5 className="text-2xl font-bold tracking-tight dark:text-white text-gray-700">
            {repo.name}
            </h5>
            <p className="font-normal text-gray-400">
                  {repo.description}
            </p>
              <div className='flex'>
                <span className='flex flex-1 gap-2 text-gray-400 items-center justify-start'>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span className='flex flex-1 gap-2 text-gray-400 items-center justify-center'>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span className='flex flex-1 gap-2 text-gray-400 items-center justify-end'>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Card>
          
          
        ))}
      </div>
      
    </>
  );
};
export default ReposPage;