//------ Assets
import { tools, technologies, languages, dataBases, design } from "@/src/data/skills.data.js"
import { FaCode } from 'react-icons/fa'


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
            <div className='TitleTab'>
                <h3>
                    <FaCode style={{ fontSize:'20px', marginRight:'10px' }} />
                    Tecnologias
                </h3>
            </div>

            <div className="Skills__container">
                { Technologies(languages) }
                { Technologies(technologies) }
                { Technologies(dataBases) }
                { Technologies(tools) }
                { Technologies(design) }
            </div>

        </section>
    )
} 