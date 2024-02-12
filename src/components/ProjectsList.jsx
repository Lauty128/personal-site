//-------> Camponents
import { ProjectCard } from "./card"

//-------> COMPONENT
export function ProjectList({ projects }){
    
    return <>
        { projects.map((project, key)=> <ProjectCard key={`${project.title}-${key}`} project={project} />)}
    </>
}

