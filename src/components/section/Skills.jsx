//------ Assets
import { tools, technologies, languages, dataBases, design } from "@/src/data/skills.data.js"
import { MdArticle } from 'react-icons/md'


//------ Functions
function Technologies(data){
    return data.map(element =>{
        return  <div className="Skills__icon" key={`${element.id}`} title={element.name} >
                    {element.icon}
                </div> 
    })
}


export function Skills(){
    return(
        <section className="Skills" id="Skills">

            <div className="Skills__moreInfo">
                <h3>Mas sobre mi</h3>
                <p>Desde joven, he estado inmerso en el mundo digital y he encontrado en la programación una forma de dar vida a mis ideas y solucionar problemas de manera creativa.</p>
                <p>Uno de los aspectos más emocionantes de la programación es su constante evolución. Siempre me mantengo al tanto de las últimas tendencias y avances tecnológicos, lo que me ha llevado a explorar nuevas áreas y paradigmas de programación. A lo largo del tiempo, he experimentado con el desarrollo de sitios web, utilizando distintos tipos de renderizado como SSR y CSR, la creación de APIs para potenciar aplicaciones y la implementación de soluciones en la nube.</p>
                <p>A medida que mi trayectoria en la programación continúa, estoy emocionado por enfrentar nuevos desafíos y aprender constantemente. Cada proyecto, ya sea pequeño o grande, trae consigo lecciones valiosas y oportunidades de crecimiento. He desarrollado varios tipos de proyectos en mi trayectoria, algunos me funcionaron y los utilizo en el día a día y otros los terminé desechando, pero cada uno de ellos dejo una enseñanza e intento aplicarla en cada nuevo proyecto que realizo.</p>
                <p>Gracias por tomarte el tiempo para conocerme un poco mejor. Siempre estoy abierto a nuevas oportunidades de colaboración y aprendizaje, así que no dudes en ponerte en contacto.</p>
                <p>Si te interesa puedes ingresar a mi blog y ver mis temas de interes</p>
                
                <a href="https://lautarosilverii.blog/" className="Skills__button">
                   <MdArticle/> Ver Blog
                </a>
            </div>

            <div className="Skills__div">
                <div className="Skills__container" data-aos="zoom-out-up" data-aos-duration="600"> 
                    <h2 className="Skills__h2">LENGUAJES</h2>
                    { Technologies(languages) }
                </div>

                <div className="Skills__container" data-aos="zoom-out-up" data-aos-duration="600"> 
                    <h2 className="Skills__h2">TECNOLOGIAS</h2>
                    { Technologies(technologies) }
                </div>

                <div className="Skills__container" data-aos="zoom-out-up" data-aos-duration="600"> 
                    <h2 className="Skills__h2">BASES DE DATOS</h2>
                    { Technologies(dataBases) }
                </div>

                <div className="Skills__container" data-aos="zoom-out-up" data-aos-duration="600">
                    <h2 className="Skills__h2">HERRAMIENTAS</h2>
                    { Technologies(tools) }
                </div>  
                <div className="Skills__container" data-aos="zoom-out-up" data-aos-duration="600">
                    <h2 className="Skills__h2">DISEÑO</h2>
                    { Technologies(design) }
                </div>  
            </div>

            {/* <div className="Skills__container" data-aos="zoom-out-up" data-aos-duration="600">
                <h2 className="Skills__h2 Skills__h2--framework">FRAMEWORKS & LIBRERIAS</h2>
                { Technologies(frameworks) }
            </div>
            
            <div className="Skills__container" data-aos="zoom-out-up" data-aos-duration="600"> 
                <h2 className="Skills__h2">TECNOLOGIAS</h2>
                { Technologies(technologies) }
            </div> */}

        </section>
    )
} 