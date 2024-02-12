//----> Assets
import { FaEye, FaArrowRight } from 'react-icons/fa';

//----> Components
import Link from 'next/link';


export function ArticleCard({ article }){
    const date = new Date(article.date) 

    return(
        <Link className='Article' href={`/blog/${article.slug}`} >
            <span className='Article__date'>
                { date.toLocaleDateString('es-AR',{
                    dateStyle:'long'
                }) }
            </span>
            <h1 className='Article__title'>{ article.title }</h1>
            <p className='Article__description'>{ article.description }</p>
        </Link>
    )
}