import Repo from "@/components/Repo";
import RepoDirs from "@/components/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";

const RepoPage = ({params : {name}}) => {
  return (
  <div className="mx-auto container py-[5.75rem] px-6">   
    <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" href='/code/repos'>Back to Repositories</Link>
   <Suspense fallback={<div>Loading repo...</div>}>
    <Repo name={name}/>
   </Suspense>
   <Suspense fallback={<div>Loading repo...</div>}>
   <RepoDirs  name={name}/>
   </Suspense>
  
  </div>
  )
};

export default RepoPage;
