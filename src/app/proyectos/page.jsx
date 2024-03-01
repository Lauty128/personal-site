//----> Assets
import { FaArrowAltCircleLeft, FaRegClock, FaDesktop } from "react-icons/fa"
import style from "./index.module.css"

//----> Utils
import { getAllFilesFrontMatter } from "@/src/lib/mdx";
import { orderByDate } from "@/src/lib/order";

//----> Components
import Link from "next/link"


//-------> Server functions
async function getProjects(pinned = false){
    const data = await getAllFilesFrontMatter('projects');
    const Projects = [];
    data.forEach((project) =>{
        // Get projects that not are pinned
        if(project.pin == pinned) Projects.push(project)
    })
    return Projects.sort(orderByDate);
}

export const metadata = {
    title: 'Lautaro Silverii | Proyectos'
}

export default async function Projects(){

    const projects = await getProjects();
    const pinnedProjects = await getProjects(true);


    function projectCard(project, index){
        const date = new Date(project.date)

        return(
            <div className={style.project} key={index}>
                <div className={style.project__image}>
                    <img src={project.images} alt={project.alt[0]} />
                </div>
    
                <div className={style.project__data}>
                    <h2 className={style.project__h2}>{project.title}</h2>
                    <p className={style.project__description}>{project.description}</p>
                    <div className={style.project__buttons}>
                        <Link href={'/proyectos/'+project.slug} className={style.project__button}>
                            Ver mas
                        </Link>
                        {
                            (project.demo)
                            ? <a href={project.demo} 
                                className={`${style.project__button} ${style['project__button--demo']}`} 
                                target="__blank" >
                                <FaDesktop /> Demo
                            </a>
                            : ''
                        }
                    </div>
                </div>
            </div>
        )
    }


    return(
        <main className={style.main}>
            <Link href={'/'} className={style.goBack}>
                <FaArrowAltCircleLeft /> Volver a inicio
            </Link>
            <h1>Lista de proyectos</h1>
            <span className={style.breadCrumbs}>
                <Link href={'/'}>Inicio</Link>
                {' / '}
                <Link href={'/proyectos'}>Proyectos</Link>
            </span>

            <h3 className={style.SubTitle} style={{ marginTop:"3em" }}>
                Proyectos principales
            </h3>
            <section className={style.projectsContainer}>
                {
                    pinnedProjects.map((project,index)=>{
                        return projectCard(project, index)
                    })  
                }
            </section>

            <h3 className={style.SubTitle}>Otros proyectos</h3>
            <section className={style.projectsContainer}>
                {
                    projects.map((project,index)=>{
                        return projectCard(project, index)
                    })  
                }
            </section>

        </main>
    )
}