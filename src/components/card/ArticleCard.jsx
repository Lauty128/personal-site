//----> Assets
import { FaEye, FaArrowRight } from 'react-icons/fa';

//----> Components
import Link from 'next/link';


export function ArticleCard({ article }){
    const date = new Date(article.date) 

    return(
        <div className="Article" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <div className="Article__textContainer">
                <div className='Article__imageContainer'>
                    <img src={article.image} alt="" />
                </div>
                <span className="Article__date">
                    { date.toLocaleDateString('es-AR',{
                        dateStyle:'long'
                    }) }
                </span>
                <h3 className="Article__title">{article.title}</h3>

                <button className="Article__button">
                    <Link href={'/blog/'+article.slug} >
                        <FaEye /> Leer
                    </Link>
                </button>
            
            </div>
        </div>
    )
}