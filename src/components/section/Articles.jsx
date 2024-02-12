//-------> Utils
import { getAllFilesFrontMatter } from '../../lib/mdx'
import { orderByDate } from '@/src/lib/order';

//-------> Components
import Link from 'next/link';
import { ArticleCard} from "../"

import style from '../../app/blog/index.module.css';

import { FaArchive, FaRegNewspaper } from 'react-icons/fa';

//-------> Server functions
async function getArticles(){
    const articles = await getAllFilesFrontMatter('articles');

    return articles.sort(orderByDate).slice(0,4)
}

//------> COMPONENT
export async function Articles(){

    const articles = await getArticles()

    return(
        <section className="Articles" id="Articles" style={{ scrollMarginTop:'5em' }}>
            
            <div className='TitleTab'>
                <h3>
                    <FaRegNewspaper style={{ fontSize:'20px', marginRight:'10px' }} />
                    Ultimos articulos
                </h3>
            </div>

            <div className="Articles__container">
                { articles.map((article,index) => <ArticleCard key={`${index}`} article={article} /> )}
            </div>

            <div className='ViewAll'>
                <a href="/blog">VER TODO</a>
            </div>

        </section>
    )
}