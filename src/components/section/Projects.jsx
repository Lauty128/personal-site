//-------> Utils
import { getAllFilesFrontMatter } from '../../lib/mdx'
import { orderByDate } from '@/src/lib/order';

//-------> Components
import Link from 'next/link';
import { ProjectList } from "../"

import { MdWork } from "react-icons/md";

//-------> Server functions
async function getProjects(){
    const projects = (await getAllFilesFrontMatter('projects')).sort(orderByDate);

    const pinnedProjects = [];
    projects.forEach((project) =>{
        // Get the first 3 pinned projects
        if(project.pin && pinnedProjects.length < 3) pinnedProjects.push(project)
    })

    return pinnedProjects;
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
                <Link href={"/proyectos"}>VER TODO</Link>
            </div>

        </section>
    )
}