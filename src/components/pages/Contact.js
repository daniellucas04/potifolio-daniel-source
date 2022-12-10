import { MdOutlineContacts } from 'react-icons/md'
import ContactForm from '../layout/ContactForm';

export default function Contact(){
  return(
    <div className='text-white-read w-full h-screen'>
      <div className="flex items-center flex-col">
        <h1 className="uppercase text-5xl mt-10 tracking-wider max-sm:text-3xl">Contact</h1>
          <p className="mt-1 text-sm flex items-center max-sm:text-xs">
            The fastest way to  
            <span className="w-fit bg-white/90 text-primary-black p-1 font-bold flex gap-2 items-center ml-1">
              contact me
              <MdOutlineContacts size={25} />
            </span>
          </p>
      </div>
      <div className='flex w-full items-center justify-center mt-[2em] bg-primary-card p-[2.5em]'>
        <ContactForm />
      </div>
    </div>
  );
}
