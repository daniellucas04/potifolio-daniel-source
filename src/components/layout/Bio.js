export default function Bio(){
  return (
    <div className="mt-20 gap-10 flex justify-start ml-20 flex-rol mb-10">
      <img className="w-[10em] h-[10em] rounded-full border-2" src="https://www.github.com/daniellucas04.png" alt="Profile"/>
      <div className="w-px h-[12em] bg-white"></div>
      <div className="flex flex-col ml-[-1em]">
        <h1 className="text-2xl font-semibold">Where did it all start?</h1>
        <li className="text-sm ml-3 mt-3 font-medium"> 2020 - Instituto Federal de São Paulo - Campus Barretos</li>
        <p className="text-xs ml-[2.5rem]">Introduced to programming</p>
        <li className="text-sm ml-3 mt-3 font-medium"> 2022 - Finishing High School</li>
        <h1 className="text-2xl font-semibold mt-5">Waiting for more experience...</h1>
      </div>
    </div>
  )
}