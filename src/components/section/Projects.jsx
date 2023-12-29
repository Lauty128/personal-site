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
        <section className="Projects" id="Projects" style={{ scrollMarginTop:'5em' }}>
            
            <h3 className="Projects__h3">Proyectos</h3>

            <div className="Projects__container">
                { <ProjectList projects={projects} /> }
            </div>

            <button className='Projects__viewMore'>
                <Link href={'/proyectos'}>
                    <FaArchive />
                    Lista de proyectos
                </Link>
            </button>

        </section>
    )
}