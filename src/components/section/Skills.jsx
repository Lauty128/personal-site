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
            <h3 className="Skills__h3">Tecnologias</h3>

            <div className="Skills__container">
                { Technologies(languages) }
                { Technologies(technologies) }
                { Technologies(dataBases) }
                { Technologies(tools) }
                { Technologies(design) }


                {/* <div className="Skills__container" data-aos="zoom-out-up" data-aos-duration="600"> 
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
                </div>   */}
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