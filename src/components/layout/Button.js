import { Link } from "react-router-dom";

export default function Button({ link, label }){
  return <Link className="font-bold bg-primary-card/80 p-2 rounded-full w-[14rem] flex items-center justify-center hover:bg-primary-card/60 transition hover:text-white/90" to={link}>{label}</Link>
}