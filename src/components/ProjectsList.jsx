"use client"

//-------> Camponents
import { ProjectCard } from "./card"

//-------> COMPONENT
export function ProjectList({ projects }){
    // console.log(projects);
    return <>
        { projects.map((project, key)=> <ProjectCard key={`${project.title}-${key}`} project={project} />)}
    </>
}

