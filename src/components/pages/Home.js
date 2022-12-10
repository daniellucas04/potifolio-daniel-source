import homepageImage from '../img/homepage-image.jpg';
import MainContent from '../layout/MainContent';
import Bio from '../layout/Bio';

export default function Home(){
  return (
    <div className="text-white-read">
      <MainContent />
        <img className='w-full h-[44em] object-cover' src={homepageImage} alt="Homepage sky"/>
      <Bio />
    </div>
  )
}