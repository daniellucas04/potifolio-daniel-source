import { SiReact, SiTailwindcss, SiGithub, SiLinkedin } from "react-icons/si"

export default function Footer(){

  const year = new Date().getFullYear();


  return(
    <footer className="w-full h-90 flex flex-col space-y-5 justify-center bg-primary-card">
      <div className="flex items-center">
        <div className="flex flex-row max-sm:w-[70%]">
          <div className="text-white-read w-80 flex flex-col gap-5 ml-10 mb-10 mt-10 max-sm:mr-[-9em] max-sm:w-[55%] max-[639px]:mr-5">
            <h1 className="font-bold text-2xl max-sm:text-lg">Daniel Lucas</h1>
            <p className="text-sm break-words mr-7 max-sm:mr-1 max-sm:text-xs max-sm:w-[8em] max-[639px]:w-[80%]">Hello, in 2020 I was introduced to programming and decided that I should build a portfolio to store all my projects. Enjoy!</p>
            <div className="flex gap-3">
              <p className="text-base max-sm:text-xs">Social</p>
              <a className="hover:text-neutral-600" href="https://github.com/daniellucas04" target="_blank" rel="noreferrer"><SiGithub size={20} /></a>
              <a className="hover:text-neutral-600" href="https://www.linkedin.com/in/daniel-lucas-328907258/" target="_blank" rel="noreferrer"><SiLinkedin size={20} /></a>
            </div>
          </div>
          <div className="bg-white h-[13em] w-px mt-5 max-sm:h-[17em] max-[295px]:h-[29em] max-[222px]:hidden" />
        </div>
          <div className="flex items-center flex-col justify-center gap-5 mx-auto">
            <div className="bg-primary-black/60 p-1 rounded-md max-sm:text-xs max-sm:flex max-sm:justify-center max-sm:w-[80%] max-sm:text-center ">
              <h1 className="text-white-read">This portifolio website are made with</h1>
            </div>
            <div className="flex gap-5 lg:flex-row max-sm:flex-col max-sm:gap-3 max-sm:text-xs">
              <a href="https://docs.github.com/pt/rest/search?apiVersion=2022-11-28#search-repositories" target="_blank" rel="noreferrer" className="footer-item">
                <SiGithub size={20} className="text-white-read" />
                <span className="footer-label">API GitHub</span>
              </a>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="footer-item">
                <SiReact size={20} className="text-sky-300" />
                <span className="footer-label">ReactJS</span>
              </a>
              <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="footer-item">
                <SiTailwindcss size={20} className="text-cyan-500" />
                <span className="footer-label">TailwindCSS</span>
              </a>
            </div>
          </div>
        </div>
        <div className="text-black/90 w-full text-start bg-slate-50">
          <span className="ml-10">Copyright &copy; {year} - Daniel Lucas</span> 
        </div>
    </footer>
  )
}