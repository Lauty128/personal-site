//-------> Utils
import { getAllFilesFrontMatter } from '../../lib/mdx'
import { orderByDate } from '@/src/lib/order';

//-------> Components
import Link from 'next/link';
import { ProjectList } from "../"

import { MdWork } from "react-icons/md";

//-------> Server functions
async function getProjects(){
    const projects = await getAllFilesFrontMatter('projects');

    return projects.sort(orderByDate).slice(0,3)
}

//------> COMPONENT
export async function Projects(){
    
    const projects = await getProjects()

    return(
        <section className="Projects" id="Projects" style={{ scrollMarginTop:'5em' }}>
            
            <div className='TitleTab'>
                <h3>
                    <MdWork style={{ fontSize:'20px', marginRight:'10px' }} />
                    Proyectos & Trabajos
                </h3>
            </div>

            <div className="Projects__container">
                { <ProjectList projects={projects} /> }
            </div>

            <div className='ViewAll'>
                <a href="/proyectos">VER TODO</a>
            </div>

        </section>
    )
}