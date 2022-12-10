import { Link } from 'react-router-dom';

export default function Header(){
  return(
    <header className="w-full h-20 bg-primary-card/60 flex items-center justify-center">
      <nav className="text-white">
        <ul className="flex gap-5 uppercase">
          <li className="header-item"><Link to="/daniel-portifolio/projects">Works</Link></li>
          <li className="header-item"><Link to="/daniel-portifolio">Home</Link></li>
          <li className="header-item"><Link to="/daniel-portifolio/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}