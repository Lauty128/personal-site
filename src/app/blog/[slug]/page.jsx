//-----> Assets
import style from './index.module.css';
import { FaClock } from 'react-icons/fa';

//-----> Utils
import { getAllFilesFrontMatter, getFileBySlug } from '@/src/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'

//-----> Components
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
            <Link href={'/blog'}>Articulos</Link>
            {' / '}
            <Link href={'/blog/'+article.frontmatter.slug}>{article.frontmatter.title}</Link>
          </span>
          <img src={ article.frontmatter.image } alt="" />
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
    description: article.frontmatter.description
  }
}