import { Link } from "react-scroll";
import { BsGithub } from "react-icons/bs";
import { useEffect, useState } from "react";

function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return ( 
        <header className="fixed w-full bg-black/60 backdrop-blur-xl shadow-xl px-8 py-4 text-sky-100 flex justify-center z-50">
            <div className="flex flex-col items-center justify-between md:flex-row gap-4 max-w-7xl w-full">
                <div className="flex gap-2 items-center">
                    <BsGithub size={30} color="#ffffff"/>
                    <span className="font-medium italic">
                        LucasSSilvaJS
                    </span>
                </div>
                <nav className="flex gap-4 font-poppins text-sm font-extralight flex-wrap">
                    <Link offset={windowWidth > 768 ? -62 : -153} to="perfil" smooth={true} duration={500} className="cursor-pointer border border-white px-3 py-1 rounded-md duration-500 hover:bg-white/20 text-center basis-1/3 flex-1 md:basis-auto">Perfil</Link>
                    <Link offset={windowWidth > 768 ? -62 : -153} to="formacao" smooth={true} duration={500} className="cursor-pointer border border-white px-3 py-1 rounded-md duration-500 hover:bg-white/20 text-center basis-1/3 flex-1 md:basis-auto">Formações</Link>
                    <Link offset={windowWidth > 768 ? -62 : -153} to="habilidades" smooth={true} duration={500} className="cursor-pointer border border-white px-3 py-1 rounded-md duration-500 hover:bg-white/20 text-center basis-1/3 flex-1 md:basis-auto">Habilidades</Link>
                    <Link offset={windowWidth > 768 ? -62 : -153} to="projetos" smooth={true} duration={500} className="cursor-pointer border border-white px-3 py-1 rounded-md duration-500 hover:bg-white/20 text-center basis-1/3 flex-1 md:basis-auto">Projetos</Link>
                </nav>
            </div>
        </header>
     );
}

export default Header;