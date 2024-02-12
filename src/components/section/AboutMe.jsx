//----- Assets
import { FaUser } from 'react-icons/fa';

export function AboutMe(){

    return (
    <section id="AboutMe" className="AboutMe" style={{scrollMarginTop:'5em'}}>
        <div className='TitleTab' style={{marginTop:'0px'}}>
            <h3>
                <FaUser style={{ fontSize:'20px', marginRight:'10px' }} />
                Sobre mi
            </h3>
        </div>

        <div className='AboutMe__content'>
            <div className='AboutMe__textContainer'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloremque modi nisi impedit praesentium laborum similique quisquam voluptates. Veritatis cum tempore est, sapiente illum modi culpa, tenetur, neque consequatur aliquid vero nam omnis fugiat id voluptate eveniet porro dolore voluptas itaque beatae libero.</p>
                <p> Numquam nemo fugit ducimus explicabo at laboriosam corporis placeat ipsum error maxime natus accusantium minima assumenda adipisci, consequuntur cumque nisi provident debitis mollitia aliquid voluptas, aspernatur tempora. Sit fugit, eum, laudantium quibusdam rem architecto ullam mollitia reprehenderit omnis praesentium sint veritatis qui quaerat saepe?</p>
            </div>
            <div className='AboutMe__image'>
                <img src="/profile.jpg" alt="" />
            </div>
        </div>
                
    </section>
    )
} 