'use client'

//----> Assets
import { /*FaCode, */FaEye/*, FaVideo, FaEyeSlash*/ } from 'react-icons/fa'

//----> Components
import Link from 'next/link'
import { ImagesCarrouselForProject } from './'


export function ProjectCard({ project }){
    const FinishedDate = new Date(project.date) 

    return(
        <div className="Project" key={project.id} data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                
            <ImagesCarrouselForProject images={project.images} alt={project.alt} />

            <div className="Project__textContainer">
                <span className="Project__description">
                    { FinishedDate.toLocaleDateString('es-AR',{
                        dateStyle:'long'
                    }) }
                </span>
                <h3 className="Project__title">{project.title}</h3>

                {/* <p className="Project__description">
                    {`${project.description}`}
                </p> */}

                <button className="Project__button">
                    <Link href={'/projects/'+project.slug} >
                        <FaEye /> Ver mas
                    </Link>
                </button>
                {/* { project.linkCode ?
                    <button className="Project__button"> 
                        <a href={project.linkCode}><FaCode /> Codigo</a> 
                    </button>
                    : 
                    <button className="Project__button Project__button-noAvailable"> 
                        <a><FaCode /> Codigo no disponible</a> 
                    </button>
                }

                { project.linkPage ?
                    <button className="Project__button"> 
                        <a href={project.linkPage}><FaEye /> Pagina</a> 
                    </button>
                    : 
                    <button className="Project__button Project__button-noAvailable"> 
                        <a><FaEyeSlash /> Pagina no disponible</a> 
                    </button>
                }
                { project.video 
                    ? <button className="Project__button Project__button--video"> 
                        <a href={project.video}><FaVideo /> Video</a> 
                        </button>
                    : ""
                }
                { project.in_process
                    ? <span style={{display:'block', marginTop:'8px', fontSize:'1.2em', color:'#FAEDBC'}}>Trabajando Actualmente..</span>
                    : ''
                } */}
            </div>
        </div>
    )
}