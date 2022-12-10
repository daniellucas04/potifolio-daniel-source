export default function Bio(){
  return (
    <div className="mt-12 gap-10 flex justify-start items-center ml-20 flex-rol mb-10 max-sm:text-xs max-sm:ml-6">
      <img className="w-[10em] h-[10em] rounded-full border-2 max-sm:w-[7em] max-sm:h-[7em]" src="https://www.github.com/daniellucas04.png" alt="Profile"/>
      <div className="w-px h-[12em] bg-white max-sm:h-[14em]" />
      <div className="flex flex-col ml-[-1em]">
        <h1 className="text-2xl font-semibold max-sm:text-base">Where did it all start?</h1>
        <li className="text-sm ml-3 mt-3 font-medium max-sm:text-xs"> 2020 - Instituto Federal de São Paulo - Campus Barretos</li>
        <p className="text-xs ml-[2.5rem] max-sm:ml-[1.25rem]">- Introduced to programming</p>
        <li className="text-sm ml-3 mt-3 font-medium max-sm:text-xs"> 2022 - Finishing High School</li>
        <h1 className="text-2xl font-semibold mt-5 max-sm:text-base">Waiting for more experience...</h1>
      </div>
    </div>
  )
}