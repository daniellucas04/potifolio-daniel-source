export default function RepositoryCard({ name, description, language, branch, cloneURL }){
  return(
    <div className="m-5 hover:translate-y-1 transition flex flex-col bg-primary-card rounded-lg shadow-md hover:bg-primary-card/50 break-words cursor-default">
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div className="flex align-center justify-center">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h1>
        </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-4">{description}</p>
        {language ? (
          <small className="text-slate-500 mt-4">
            <span className="text-base text-white/80 font-bold">Most used</span>
            <span className="bg-slate-600 font-bold px-5 py-0 rounded-xl ml-2 text-slate-300">{language}</span>
          </small>
        ) : (
          <small className="text-slate-500 mt-4">
            <span className="text-base text-white/80 font-bold">Most used</span>
            <span className="bg-slate-600 font-bold px-5 py-0 rounded-xl ml-2 text-slate-300">None</span>
          </small>
        )}
        <p className="mt-5">  
          <span className="text-base text-white/80 font-bold">Default branch</span>
          <span className="bg-slate-600 font-bold px-5 py-0 rounded-xl ml-2 text-slate-300">{branch}</span>
        </p>
        <p className="bg-black/30 rounded-md p-3 mt-5 w-100% text-center flex flex-col">
          <span className="font-bold mt-2 text-slate-500">Access this repository </span>
          <a href={cloneURL} target="_blank" rel="noreferrer" className="text-sky-500 hover:underline underline-offset-8 decoration-slate-600">{cloneURL}</a>
        </p>
      </div>
    </div>
  )
}