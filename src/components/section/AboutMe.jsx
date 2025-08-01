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
                <p>Desde mis primeros pasos en la programación, el <b>desarrollo de software</b> se convirtió en una pasión que impulsó mi crecimiento <b>profesional</b>. Con el tiempo, y especialmente en mi experiencia dentro de una empresa, aprendí a asumir responsabilidades reales, trabajar con clientes, entender sus necesidades y transformar problemas concretos en soluciones funcionales.</p>
                <p>He adquirido experiencia en el diseño de <b>aplicaciones escalables</b>, el manejo eficiente de <b>bases de datos</b> y el desarrollo de sistemas en distintos entornos. También participé en varios proyectos y emprendimientos donde lideré <b>soluciones digitales</b>, trabajando con diversas tecnologías para resolver problemas reales y mejorar procesos.</p>
                <p>Hoy, combino una mirada técnica con una orientación clara al usuario y al negocio, buscando siempre aportar <b>soluciones reales y sostenibles</b>.</p>
            </div>
            <div className='AboutMe__image'>
                <Image width={200} height={150} src="/lautaro.jpg" alt="" />
            </div>
        </div>
                
    </section>
    )
} 