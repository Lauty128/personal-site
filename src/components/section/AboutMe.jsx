//----- Assets
import { FaFileAlt } from 'react-icons/fa';

export function AboutMe(){

    return (
    <section id="AboutMe" className="AboutMe">
        <div className="AboutMe__container">
                {/* <div className="AboutMe__imageContainer">
                    <img src={'/profile.webp'} alt="Imagen Mia" className="AboutMe__image" data-aos="zoom-in" data-aos-delay="100"/>
                </div> */}
                <div className="AboutMe__textContainer">
                    <h3 className="AboutMe__h3">Sobre mi</h3>
                    <p className="AboutMe__p">
                        Hola, mi nombre es Lautaro y te doy la bienvenida a mi espacio virtual. Soy un desarrollador web autodidacta apasionado por la creacion e innovacion. Actualmente me encuentro en la busqueda de mi primera experiencia laboral y seria un honor poder apotar para el exito de quienes confien en mi y me brinden una oportunidad. 
                        <br />
                        Mi viaje en el mundo del desarrollo web ha sido un recorrido de autodescubrimiento y superación constante mediante desafios interesantes. 
                        <br />
                        <br />
                        Puedes descargar mi curriculum y echarle un vistazo.
                    </p>
                    <a id="buttonProjects" href='https://drive.google.com/file/d/16G5KwbATs9e9Gi7dUDhFYM1pOo1hPd8j/view?usp=sharing' 
                        className="AboutMe__button">
                        <div className="AboutMe__effectButton"></div>
                        <FaFileAlt />
                        <h4 className="AboutMe__h4 hvr-grow">Descargar CV</h4>
                    </a>
                </div>
            </div>
    </section>
    )
} 