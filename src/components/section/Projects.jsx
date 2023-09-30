//-------> Utils
import { getAllFilesFrontMatter } from '../../lib/mdx'

//-------> Camponents
import { ProjectList } from "../"

//-------> Server functions
async function getProjects(){
    const projects = await getAllFilesFrontMatter();

    return projects
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

        </section>
    )
}