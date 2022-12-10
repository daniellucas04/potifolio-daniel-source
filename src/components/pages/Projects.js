import { useEffect, useState } from "react";
import { SiGithub } from 'react-icons/si'
import RepositoryCard from "../layout/RepositoryCard";
import Loading from "../layout/Loading";

export default function Projects(){
  
  const [repositories, setRepositories] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);


  useEffect(() => {
    fetch('https://api.github.com/users/daniellucas04/repos', {
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((data) =>{
      setRepositories(data);
      setRemoveLoading(true);
    })
    .then((err) => console.log(err));
  }, [])
  
  return (
    <div className="text-white-read/90">
      <div className="flex flex-col items-center justify-center">
        <h1 className="uppercase text-5xl mt-10 tracking-wider">repositories</h1>
        <p className="mt-1 text-sm flex items-center">
          All of my projects are stored on 
          <a href="https://www.github.com/daniellucas04" target="_blank" rel="noreferrer" className="w-fit bg-white/90 text-primary-black p-1 font-bold flex gap-2 items-center ml-1">
            GitHub
            <SiGithub size={20} />
          </a>
        </p>
      </div>
      {!removeLoading && <Loading />}
      <div className='text-white/90 mx-auto grid grid-cols-3 m-20'>
        {repositories.length > 0 && repositories.map((repository) => (
          <RepositoryCard
            key={repository.id}
            name={repository.name}
            description={repository.description}
            language={repository.language}
            branch={repository.default_branch}
            cloneURL={repository.clone_url}
          />
        ))}
      </div>
    </div>
  );
}