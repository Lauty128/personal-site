//----> Assets
// import { FaEye, FaArrowRight } from 'react-icons/fa';

//----> Components
// import Link from 'next/link';


export function ProjectCard({ project }){
    // const FinishedDate = new Date(project.date) 

    return(
        <a className="Project" href={ '/proyectos/'+project.slug }>
            <div className='Project__image'>
                <img src={project.images} alt="" />
            </div>
            <h3 className='Project__title'>{ project.title }</h3>
            <p className='Project__description'>{ project.description }</p>
        </a>
    )
}