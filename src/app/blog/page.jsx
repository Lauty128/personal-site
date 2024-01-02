//----> Assets
import { FaArrowAltCircleLeft } from "react-icons/fa"
import style from "./index.module.css"

//----> Utils
import { getAllFilesFrontMatter } from "@/src/lib/mdx";
import { orderByDate } from "@/src/lib/order";

//----> Components
import Link from "next/link"


//-------> Server functions
async function getArticles(){
    const data = await getAllFilesFrontMatter('articles');
    const articles = data.slice(0, 6);
    return {
       articles: articles.sort(orderByDate),
       pages: Math.ceil(data.length / 6)
    }
}

export default async function Articles(){

    const {articles, pages} = await getArticles();
    
    const paginationArray = []
    for (let index = 1; index <= pages; index++){ paginationArray.push(index) }

    function articleCard(article, index){
        const date = new Date(article.date)
        
        return(
            <Link className={style.article} key={index} href={`/blog/${article.slug}`} >
                <div className={style.article__tags}>
                    {
                        Array.isArray(article.tags)
                        ? article.tags.map((tag,index) =>{
                            return <span key={`${index}`}>{tag}</span>
                        })
                        : ''
                    }
                </div>
                <h1 className={style.article__h1}>{ article.title }</h1>
                <span className={style.article__date}>
                    { date.toLocaleDateString('es-AR',{
                        dateStyle:'long'
                    }) }
                </span>
                <p className={style.article__description}>{ article.description }</p>
            </Link>
        )
    }


    return(
        <main className={style.main}>
            <Link href={'/'} className={style.goBack}>
                <FaArrowAltCircleLeft /> Volver a inicio
            </Link>
            <h1>BLOG PERSONAL</h1>
            <span className={style.breadCrumbs}>
                <Link href={'/'}>Inicio</Link>
                {' / '}
                <Link href={'/articulos'}>Articulos</Link>
            </span>

            <section className={style.articlesContainer}>
                {
                    articles.map((article,index)=>{
                        return articleCard(article, index)
                    })  
                }
            </section>

            <div className={style.pagination}>
                {
                    paginationArray.map((pagination)=>{
                        if(pagination == 1){
                            return <Link href={`#`} className={`${style.pagination__a} ${style['pagination__a--active']}`}>{pagination}</Link>

                        }
                        return <Link href={`/blog/page/${pagination}`} className={style.pagination__a}>{pagination}</Link>
                    })
                }
            </div>
        </main>
    )
}

export const metadata = {
    title: 'Blog personal',
    description: 'Blog personal donde se encuentran todos los articulos escritos con mucha pasion'
}