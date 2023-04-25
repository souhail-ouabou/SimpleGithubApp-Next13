'use client'
import { Card } from "flowbite-react";
import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa";


async function fetchRepo(name) {
  const respone = await fetch(`https://api.github.com/repos/souhail-ouabou/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  )
  const repo = await respone.json();
  return repo;
}
const Repo = async ({ name }) => {

  const repo = await fetchRepo(name);

  return <>
    <Card className='border border-gray-400 mb-2 py-5 px-4 rounded-lg' >
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
  </>;
};

export default Repo;
