'use client'

//----> Assets
import { FaEye } from 'react-icons/fa'

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

                <button className="Project__button">
                    <Link href={'/projects/'+project.slug} >
                        <FaEye /> Ver mas
                    </Link>
                </button>
            
            </div>
        </div>
    )
}