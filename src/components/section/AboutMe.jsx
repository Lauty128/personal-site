//----- Assets
import { FaUser } from 'react-icons/fa';

//----> Components
import Image from 'next/image';


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
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloremque modi nisi impedit praesentium laborum similique quisquam voluptates. Veritatis cum tempore est, sapiente illum modi culpa, tenetur, neque consequatur aliquid vero nam omnis fugiat id voluptate eveniet porro dolore voluptas itaque beatae libero.</p> */}
                {/* <p> Numquam nemo fugit ducimus explicabo at laboriosam corporis placeat ipsum error maxime natus accusantium minima assumenda adipisci, consequuntur cumque nisi provident debitis mollitia aliquid voluptas, aspernatur tempora. Sit fugit, eum, laudantium quibusdam rem architecto ullam mollitia reprehenderit omnis praesentium sint veritatis qui quaerat saepe?</p> */}
                <p>Soy un estudiante de la carrera de analista de sistemas que siente un fuerte interés por el mundo de la programación. Hace ya unos años que comencé con mi primera línea de código y, desde ese momento hasta el día de hoy, tuve grandes desafíos que me proporcionaron una visión mucho más profesional sobre el <b>desarrollo de software</b> y hoy me permiten realizar una gran variedad de trabajos.</p>
                <p>Trabaje con distintos tipos de renderizados como <b title='Server Side Rendering'>SSR</b>, <b title='Client Site Rendering'>CSR</b> y <b title='Static Site Generator'>SSG</b> (este sitio utiliza este tipo de renderizado). Todo esto me permite trabajar en varios proyectos y desempeñarme de una forma óptima en el mismo.</p>
                <p>Puedo desarrollar tanto en <b>backend</b> como en <b>frontend</b>, aunque considero que mi fuerte está en el frontend, ya que soy capaz de diseñar y desarrollar interfaces interactivas e intuitivas para el usuario.</p>
                <p>Últimamente estoy trabajando mucho con <b>Laravel</b>, en su versión 10, y cada vez más me desenvuelvo mejor con esta tecnología.</p>
            </div>
            <div className='AboutMe__image'>
                <Image width={200} height={150} src="/profile.jpg" alt="" />
            </div>
        </div>
                
    </section>
    )
} 