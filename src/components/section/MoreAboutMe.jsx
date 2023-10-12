import { MdArticle } from "react-icons/md"

export function MoreAboutMe(){

    const paragraphStyles = {
        // margin: '0', 
        color: '#bababa', 
        fontSize: '1.1em',
    }

    return <section className="AboutMe" style={{ paddingTop:'0' }}>
        <h3 className="AboutMe__h3">Mas sobre mi</h3>
        <p style={paragraphStyles}>Desde joven, he estado inmerso en el mundo digital y he encontrado en la programación una forma de dar vida a mis ideas y solucionar problemas de manera creativa.</p>
        <p style={paragraphStyles}>Uno de los aspectos más emocionantes de la programación es su constante evolución. Siempre me mantengo al tanto de las últimas tendencias y avances tecnológicos, lo que me ha llevado a explorar nuevas áreas y paradigmas de programación. A lo largo del tiempo, he experimentado con el desarrollo de sitios web, utilizando distintos tipos de renderizado como SSR, SSG y CSR, la creación de APIs para potenciar aplicaciones y la implementación de soluciones en la nube.</p>
        <p style={paragraphStyles}>A medida que mi trayectoria en la programación continúa, estoy emocionado por enfrentar nuevos desafíos y aprender constantemente. Cada proyecto, ya sea pequeño o grande, trae consigo lecciones valiosas y oportunidades de crecimiento. He desarrollado varios tipos de proyectos en mi trayectoria, algunos me funcionaron y los utilizo en el día a día y otros los terminé desechando, pero cada uno de ellos dejo una enseñanza e intento aplicarla en cada nuevo proyecto que realizo.</p>
        <p style={paragraphStyles}>Gracias por tomarte el tiempo para conocerme un poco mejor. Siempre estoy abierto a nuevas oportunidades de colaboración y aprendizaje, así que no dudes en ponerte en contacto.</p>
        <p style={paragraphStyles}>Si te interesa puedes ingresar a mi blog y ver mis temas de interes</p>
                
        <a href="https://lautarosilverii.blog/" className="AboutMe__button--pk">
            <MdArticle/> Ver Blog
        </a>
    </section>
}