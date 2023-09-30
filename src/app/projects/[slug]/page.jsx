//-----> Assets
import style from './index.module.css'

//-----> Utils
import { getAllFilesFrontMatter, getFileBySlug } from '@/src/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'

//-----> Components
import { Carousel } from '@/src/components'
import Link from 'next/link'

//-----> Functions
async function getProject(slug){
  const project = await getFileBySlug(slug)

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
          <button className={style.goBack}>
            <Link href={'/'}>
             {'⬅  '} Volver
            </Link>
          </button>

          <h1 className={style.title}>{ project.frontmatter.title }</h1>

          <span className={style.breadCrumbs}>
            <Link href={'/'}>Inicio</Link>
            {' / '}
            <Link href={'/projects'}>Proyectos</Link>
            {' / '}
            <Link href={'/projects/'+project.frontmatter.slug}>{project.frontmatter.title}</Link>
          </span>

          {/* <ImagesCarrousel images={project.frontmatter.images} alt={project.frontmatter.alt} /> */}
          <div style={{width:'100%', marginTop:'3em'}}>
            <span className={style.copyright}>Carrousel de imagenes hecho por <a href="https://github.com/sahilsaha7773/react-carousel-minimal">sahilsaha7773</a></span>
            <Carousel
              data={images}
              time={2000}
              width="850px"
              height="500px"
              // captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              // slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              showNavBtn={true}
              style={{
                marginTop:'10px',
                textAlign: "center",
                maxWidth: "850px",
              }}
            />
          </div>

          <article className={style.content}>
            <MDXRemote source={project.source}/>
          </article>
        </div>
      </>
    )
}

export async function generateStaticParams(){
    const projects = await getAllFilesFrontMatter();
    
    return projects.map((project) => ({
      slug: project.slug,
    }))
}