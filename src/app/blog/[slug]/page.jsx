//-----> Assets
import style from './index.module.css';
import { FaClock } from 'react-icons/fa';

//-----> Utils
import { getAllFilesFrontMatter, getFileBySlug } from '@/src/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'

//-----> Components
import Image from 'next/image';
import Link from 'next/link'


//-----> Functions
async function getArticle(slug){
  const article = await getFileBySlug('articles', slug)
  return article
}

export default async function Article({ params }){
    const { slug } = params
    const article = await getArticle(slug);

    const date = new Date(article.frontmatter.date)
    
    return(
      <>
        <div className={style.container}>
          <button className={style.goBack}>
            <Link href={'/blog'}>
             {'⬅  '} Volver
            </Link>
          </button>

          <span className={style.breadCrumbs}>
            <Link href={'/'}>Inicio</Link>
            {' / '}
            <Link href={'/blog'}>Blog</Link>
            {' / '}
            <Link href={'/blog/'+article.frontmatter.slug}>{article.frontmatter.title}</Link>
          </span>
          
          <div className={style.imageContainer}>
            <Image width={120} height={80} src={ article.frontmatter.image } alt="" />
            { (article.frontmatter.image_author) &&
              <p className={style.imageAuthor}>
                <a href={article.frontmatter.image_author.url}>{article.frontmatter.image_author.name}</a>
              </p> 
            }
          </div>
          
          <h1 className={style.title}>{ article.frontmatter.title }</h1>
          <span>{ article.frontmatter.readingTime.text }</span>


          <article className={style.content}>
            <MDXRemote source={article.source}/>
          </article>

          <span className={style.article__date}>
            <FaClock />
            { date.toLocaleDateString('es-AR',{
                dateStyle:'long'
            }) }
          </span>
        </div>
      </>
    )
}

export async function generateStaticParams(){
    const articles = await getAllFilesFrontMatter('articles');
    
    return articles.map((article) => ({
      slug: article.slug,
    }))
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const article = await getArticle(slug);

  return {
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    keywords: article.frontmatter.keywords || "",
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      images:[
        {
          url: article.frontmatter.image,
          width: 600,
          height: 400,
        },
      ]
    }
  }
}