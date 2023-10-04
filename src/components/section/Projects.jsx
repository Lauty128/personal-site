//-------> Utils
import { getAllFilesFrontMatter } from '../../lib/mdx'
import { orderByDate } from '@/src/lib/order';

//-------> Components
import Link from 'next/link';
import { ProjectList } from "../"

import { FaArchive } from 'react-icons/fa';

//-------> Server functions
async function getProjects(){
    const projects = await getAllFilesFrontMatter();

    return projects.sort(orderByDate).slice(0,3)
}

//------> COMPONENT
export async function Projects(){
    
    const projects = await getProjects()

    return(
        <section className="Projects" id="Projects">
            
            <h2 className="Projects__title">PROYECTOS</h2>

            <div className="Projects__container">
                { <ProjectList projects={projects} /> }
            </div>

            <button className='Projects__viewMore'>
                <Link href={'/projects'}>
                    <FaArchive />
                    Lista de proyectos
                </Link>
            </button>

        </section>
    )
}