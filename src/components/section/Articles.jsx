//-------> Utils
import { getAllFilesFrontMatter } from '../../lib/mdx'
import { orderByDate } from '@/src/lib/order';

//-------> Components
import Link from 'next/link';
import { ArticleCard} from "../"

import { FaArchive } from 'react-icons/fa';

//-------> Server functions
async function getArticles(){
    const articles = await getAllFilesFrontMatter('articles');

    return articles.sort(orderByDate).slice(0,3)
}

//------> COMPONENT
export async function Articles(){

    const articles = await getArticles()

    return(
        <section className="Articles" id="Articles" style={{ scrollMarginTop:'5em' }}>
            
            <h3 className="Articles__h3">Ultimos articulos</h3>

            <div className="Articles__container">
                { articles.map((article,index) => <ArticleCard key={`${index}`} article={article} /> )}
            </div>

            <button className='Articles__viewMore'>
                <Link href={'/blog'}>
                    <FaArchive />
                    Blog personal
                </Link>
            </button>

        </section>
    )
}