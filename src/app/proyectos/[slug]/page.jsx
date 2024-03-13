//-----> Assets
import style from './index.module.css'
import { FaCode, FaDesktop, FaPager, faRed, FaExternalLinkAlt } from 'react-icons/fa'

//-----> Utils
import { getAllFilesFrontMatter, getFileBySlug } from '@/src/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'

//-----> Components
// import { Carousel } from '@/src/components'
import Image from 'next/image';
import Link from 'next/link';

//-----> Components
import Technologies from '@/src/data/technologies.data'

//-----> Functions
async function getProject(slug){
  const project = await getFileBySlug('projects',slug)

  return project
}

export async function generateMetadata({ params }, parent) {
  const slug = params.slug;
  
  const project = await getProject(slug)

  return {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
    keywords: project.frontmatter.keywords || ""
  };
}

export default async function Project({ params }){
    const { slug } = params
    const project = await getProject(slug)
    
    return(
      <>
        <div className={style.container}>

          <div className={style.HeaderImage}>
            <a href="/">
              <Image width={60} height={60} src="/logo-light.png" alt="logo lautaro silverii" />
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

                { project.frontmatter.page && 
                  <a href={project.frontmatter.page} className={style.url}>
                    <FaExternalLinkAlt />
                    Página
                  </a>
                }

                {
                  (project.frontmatter.links) &&
                  project.frontmatter.links.map((link, index)=>( 
                    <a href={link.url} key={index} className={style.url}>
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