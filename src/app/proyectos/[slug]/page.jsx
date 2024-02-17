//-----> Assets
import style from './index.module.css'
import { FaCode, FaDesktop, FaPager, faRed, FaExternalLinkAlt } from 'react-icons/fa'

//-----> Utils
import { getAllFilesFrontMatter, getFileBySlug } from '@/src/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'

//-----> Components
// import { Carousel } from '@/src/components'
import Link from 'next/link'

//-----> Components
import Technologies from '@/src/data/technologies.data'

//-----> Functions
async function getProject(slug){
  const project = await getFileBySlug('projects',slug)

  return project
}

export default async function Project({ params }){
    const { slug } = params
    const project = await getProject(slug)
    
    const images = project.frontmatter.images.map((image, index)=>{
      return { image }
    })
    
    return(
      <>
        <div className={style.container}>

          <div className={style.HeaderImage}>
            <a href="/">
              <img src="/logo-light.png" alt="logo lautaro silverii" />
            </a>
          </div>
          <div className={style.Header}>
              <button className={style.goBack}>
                <Link href={'/proyectos'}>
                {'⬅  '} Volver
                </Link>
              </button>
              <h1>{ project.frontmatter.title }</h1>
              <p className={style.Header__description}>{ project.frontmatter.description }</p>
              
              <div style={{ display:'block' }}>
                { project.frontmatter.code && 
                  <a href={project.frontmatter.code} className={style.url}>
                    <FaExternalLinkAlt />
                    Código
                  </a>
                }
                
                { project.frontmatter.demo && 
                  <a href={project.frontmatter.demo} className={style.url}>
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                }

                {
                  (project.frontmatter.links) &&
                  project.frontmatter.links.map(link=>( 
                    <a href={link.url} className={style.url}>
                      <FaExternalLinkAlt />
                      {link.name || link.url}
                    </a>
                  ))
                }
              </div>

              <h4>Tecnologias utilizadas</h4>
              <div className={style.technologies}>
                {
                  project.frontmatter.Technologies.map((tech,index)=>{
                    const data = Technologies[tech]
                    return <div key={`${index}-${data.name}`} title={data.name} className={style.technology}>
                      { data.icon }
                      <span>{ data.name }</span>
                    </div>
                  })
                }
              </div>
          </div>

          <article className={style.content}>
            <MDXRemote source={project.source}/>
          </article>
        </div>
      </>
    )
}

export async function generateStaticParams(){
    const projects = await getAllFilesFrontMatter('projects');
    
    return projects.map((project) => ({
      slug: project.slug,
    }))
}