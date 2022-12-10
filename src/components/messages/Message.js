import { useEffect, useState } from "react";
import styles from './Message.module.css';

export default function Message({ text, type }){

  const [visible, setVisible] = useState(false);

  useEffect(() =>{
    if(!text){
      setVisible(false);
      return;
    }
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return ()=> clearTimeout(timer)
  }, [text]);

  return(
    <>
      {visible && (
        <div className={`w-full ${styles[type]} font-bold text-white h-auto flex items-center justify-center p-2 rounded-md`}>
          {text}
        </div>
      )}
    </>
  );
}