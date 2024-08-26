import { Element } from "react-scroll";

import Container from "../../components/Container";
import Header from "../../components/Header";

import perfil from '../../assets/perfil.png'

import creche from '../../assets/creche.png'
import renatows from '../../assets/renatows.png'
import deadpool from '../../assets/deadpool.png'

import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiFirebaseFill } from "react-icons/ri";

function Home() {
    return (
        <Container>
            <Header />
            <main className="pt-40 lg:pt-16 font-poppins">
                <Element name="perfil" className="min-h-96 w-full flex justify-center">
                    <div className="max-w-7xl w-full p-10">
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 w-full">
                            <img
                                src={perfil}
                                alt="minha foto de perfil"
                                className="w-60 h-60 object-cover grayscale rounded-full animate-morph"
                            />
                            <article className="w-full lg:max-w-xl border border-slate-600 rounded-3xl">
                                <div className="flex flex-col gap-2 font-extralight text-left p-6">
                                    <h2 className="text-center font-semibold text-4xl mb-1 ">Perfil</h2>
                                    <p>Meu nome é Lucas de Souza Silva. Tenho atualmente 26 anos. Moro em Recife, Pernambuco.</p>
                                    <p>Acredito que o maior poder do ser humano é o conhecimento. Por isso sempre estou em busca de aprender algo novo.</p>
                                    <p>Essa sede por conhecimento, me levou a conhecer o universo da programação e estou amando. Hoje posso dizer com determinação que não me vejo fazendo outra profissão.</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </Element>
                <Element name="formacao" className="min-h-96 w-full bg-city bg-no-repeat bg-cover bg-top bg-fixed text-white relative">
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 flex items-center justify-center flex-col gap-2 px-10">
                        <h2 className="font-bold text-4xl mb-6">
                            Formações
                        </h2>
                        <ul className="list-disc drop-shadow-2xl">
                            <li>
                                Sou formado em Licenciatura em Geografia pelo IFPE Campus Recife.
                            </li>
                            <li>
                                Fiz 1 ano e 3 meses de técnico em Desenvolvimento de Sistemas pela Grau Técnico.
                            </li>
                            <li>
                                Atualmente faço ADS pela Faculdade Senac, sendo aluno do programa Embarque Digital.
                            </li>
                        </ul>
                    </div>
                </Element>
                <Element name="habilidades" className="min-h-96 w-full font-poppins p-10 flex justify-center items-center flex-col">
                    <h2 className="font-bold text-4xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">
                        Habilidades
                    </h2>
                    <div className="flex gap-10 justify-center items-center flex-wrap w-full max-w-7xl">
                        <article className="flex items-center justify-center flex-col gap-6 w-full md:w-1/5">
                            <FaReact size={150} color="white" />
                            <span className="text-xl font-bold">React</span>
                        </article>
                        <article className="flex items-center justify-center flex-col gap-6 w-full md:w-1/5">
                            <FaNode size={150} color="white" />
                            <span className="text-xl font-bold">Node</span>
                        </article>
                        <article className="flex items-center justify-center flex-col gap-6 w-full md:w-1/5">
                            <RiFirebaseFill size={150} color="white" />
                            <span className="text-xl font-bold">Firebase</span>
                        </article>
                        <article className="flex items-center justify-center flex-col gap-6 w-full md:w-1/5">
                            <GrMysql size={150} color="white" />
                            <span className="text-xl font-bold">MySql</span>
                        </article>
                    </div>
                </Element>
                <hr className="border border-slate-600/40"/>
                <Element name="projetos" className="min-h-96 w-full font-poppins p-10 flex flex-col items-center justify-center">
                    <h2 className="font-bold text-4xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500 text-center ">
                        Projetos
                    </h2>
                    <div className="w-full flex justify-center items-center gap-12 flex-wrap max-w-7xl">
                        <div className="basis-full md:basis-1/3 lg:basis-1/4 relative group">
                            <img src={renatows} alt="renatows youtube" className="w-full"/>
                            <div className="absolute inset-0 bg-black/85 hidden group-hover:flex items-center justify-center w-full flex-col gap-4 p-8 text-center">
                                <h2 className="text-xl font-semibold">
                                    RenatowsYT
                                </h2>
                                <p>
                                    Uso da Api do Youtube e do Redux para gerar uma página web em React para um canal de jogos e animações de terror chamado Renatows.
                                </p>
                                <a href="https://github.com/LucasSSilvaJS/renatows" target="_blank" rel="noreferrer" className="py-1 px-4 rounded-full border-white border bg-white/20 hover:bg-white/40 text-sm">
                                    Repositório
                                </a>
                                <a href="https://renatows.vercel.app/" target="_blank" rel="noreferrer" className="py-1 px-4 rounded-full border-white border bg-white/20 hover:bg-white/40 text-sm">
                                    Acessar página
                                </a>
                            </div>    
                        </div>
                        <div className="basis-full md:basis-1/3 lg:basis-1/4 relative group">
                            <img src={creche} alt="gerenciador de pertences para creche" className="w-full"/> 
                            <div className="absolute inset-0 bg-black/85 hidden group-hover:flex items-center justify-center w-full flex-col gap-4 p-8 text-center">
                                <h2 className="text-xl font-semibold">
                                    Creche sem perdas
                                </h2>
                                <p>
                                    Foi utilizado o Firebase e o React com objetivo de propor uma solução para evitar a perda e troca dos pertences de crianças no contexto da educação infantil.
                                </p>
                                <a href="https://github.com/LucasSSilvaJS/creche" target="_blank" rel="noreferrer" className="py-1 px-4 rounded-full border-white border bg-white/20 hover:bg-white/40 text-sm">
                                    Repositório
                                </a>
                                <a href="https://creche-eta.vercel.app/" target="_blank" rel="noreferrer" className="py-1 px-4 rounded-full border-white border bg-white/20 hover:bg-white/40 text-sm">
                                    Acessar página
                                </a>
                            </div>    
                        </div>
                        <div className="basis-full md:basis-1/3 lg:basis-1/4 relative group">
                            <img src={deadpool} alt="homenagem ao filme deadpool" className="w-full"/>    
                            <div className="absolute inset-0 bg-black/85 hidden group-hover:flex items-center justify-center w-full flex-col gap-4 p-8 text-center">
                                <h2 className="text-xl font-semibold">
                                    DeadPool e Wolverine
                                </h2>
                                <p>
                                    Aplicação da API da Marvel no React para realizar consultas de quadrinhos em que o DeadPool e/ou o Wolverine já participaram.
                                </p>
                                <a href="https://github.com/LucasSSilvaJS/deadpoolwolverine" target="_blank" rel="noreferrer" className="py-1 px-4 rounded-full border-white border bg-white/20 hover:bg-white/40 text-sm">
                                    Repositório
                                </a>
                                <a href="https://deadpoolwolverine.vercel.app/" target="_blank" rel="noreferrer" className="py-1 px-4 rounded-full border-white border bg-white/20 hover:bg-white/40 text-sm">
                                    Acessar página
                                </a>
                            </div>    
                        </div>
                    </div>
                </Element>
            </main>
        </Container>
    );
}

export default Home;