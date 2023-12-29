//----> Assets
import { FaArrowAltCircleLeft, FaRegClock, FaDesktop } from "react-icons/fa"
import style from "./index.module.css"

//----> Utils
import { getAllFilesFrontMatter } from "@/src/lib/mdx";
import { orderByDate } from "@/src/lib/order";

//----> Components
import Link from "next/link"
// import { Header } from '../../components/static'


//-------> Server functions
async function getProjects(){
    const projects = await getAllFilesFrontMatter();

    return projects.sort(orderByDate)
}

export default async function Projects(){

    const projects = await getProjects();


    function projectCard(project, index){
        const date = new Date(project.date)

        return(
            <div className={style.project} key={index}>
                <div className={style.project__image}>
                    <img src={project.images[0]} alt={project.alt[0]} />
                </div>
    
                <div className={style.project__data}>
                    <span className={style.project__date}>
                        <FaRegClock/>
                        { date.toLocaleDateString('es-AR',{
                            dateStyle:'long'
                        }) }
                    </span>
                    <h2 className={style.project__h2}>{project.title}</h2>
                    <p className={style.project__description}>{project.description}</p>
                    <div className={style.project__buttons}>
                        <Link href={'/proyectos/'+project.slug} className={style.project__viewMore}>
                            Ver mas
                        </Link>
                        {
                            (project.demo)
                            ? <a href={project.demo} 
                                className={style.project__viewMore} 
                                target="__blank"
                                style={{
                                    backgroundColor:'#FAEDBC'
                                }}
                              >
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
            <h1>LISTA DE PROYECTOS</h1>
            <span className={style.breadCrumbs}>
                <Link href={'/'}>Inicio</Link>
                {' / '}
                <Link href={'/proyectos'}>Proyectos</Link>
            </span>

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