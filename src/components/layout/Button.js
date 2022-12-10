import { Link } from "react-router-dom";

export default function Button({ link, label }){
  return <Link className="button-style bg-primary-card/80 hover:bg-primary-card/60" to={link}>{label}</Link>
}