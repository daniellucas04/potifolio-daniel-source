import Button from '../layout/Button';

export default function MainContent(){
  return (
    <div className='relative'>
        <div className='absolute ml-auto mr-auto right-0 left-0 text-center mt-[14rem] bg-black/30 p-2'>
          <h1 className='flex flex-col items-center'>
            <span className='font-bold text-7xl'>Hello!</span>
            <span className='text-2xl py-1'>I'm Daniel</span>
            <span className='text-xl py-1'>A developer living in</span> 
            <span className='font-bold text-3xl text-sky-300'>Brazil</span>  
          </h1>
          <div className='flex justify-center mt-3 mb-3'>
            <Button link="/projects" label="Check out my projects!" />
          </div>
        </div>
    </div>
  )
}