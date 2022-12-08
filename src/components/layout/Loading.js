import loading from '../img/loading.gif';

export default function Loading(){
  return (
    <div className='flex items-center justify-center mt-24'>
      <img src={loading} alt="loading"/>
    </div>
  );
}