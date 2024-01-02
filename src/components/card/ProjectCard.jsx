//----> Assets
import { FaEye, FaArrowRight } from 'react-icons/fa';

//----> Components
import Link from 'next/link';


export function ProjectCard({ project }){
    const FinishedDate = new Date(project.date) 

    return(
        <div className="Project" key={project.id} data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                
            {/* <ImagesCarrouselForProject images={project.images} alt={project.alt} /> */}
            <FaArrowRight className="Project__arrow" />
            <div className="Project__textContainer">
                <span className="Project__description">
                    { FinishedDate.toLocaleDateString('es-AR',{
                        dateStyle:'long'
                    }) }
                </span>
                <h3 className="Project__title">{project.title}</h3>
                <p className='Project__p'>{project.description}</p>

                <button className="Project__button">
                    <Link href={'/proyectos/'+project.slug} >
                        <FaEye /> Ver mas
                    </Link>
                </button>
            
            </div>
        </div>
    )
}