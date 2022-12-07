import { Link } from 'react-router-dom';

export default function Header(){
  return(
    <header className="w-full">
      <nav className="text-white">
        <ul className="flex gap-5 align-center justify-center mt-3">
          <li className="header-item"><Link to="/">Home</Link></li>
          <li className="header-item"><Link to="/projects">Projects</Link></li>
          <li className="header-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}