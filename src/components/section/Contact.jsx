//-----> Assets
import { FaGithub, FaLinkedin, FaWhatsapp, FaPhoneAlt } from "react-icons/fa"
import { MdLocationPin, MdEmail } from "react-icons/md"

//-----> Components
import { Form } from "../"


export function Contact(){

    return(
    <section className="ContactMe" id="ContactMe" style={{ scrollMarginTop:'5em' }}>
        
        <div className='TitleTab'>
            <h3>
                <FaPhoneAlt style={{ fontSize:'20px', marginRight:'10px' }} />
                Contactame
            </h3>
        </div>

        <div className="ContactMe__cards">
            <a className="ContactMe__card" href="https://www.linkedin.com/in/lautaro-silverii-8a5750209/">
                <FaLinkedin />
                <span className="ContactMe__cardTitle">Lautaro Silverii</span>
                <span>Linkedin</span>
            </a>
            <a className="ContactMe__card" href="https://github.com/Lauty128">
                <FaGithub />
                <span className="ContactMe__cardTitle">Lauty128</span>
                <span>Github</span>
            </a>
            <a className="ContactMe__card" href="mailto:lautarosilverii@gmail.com">
                <MdEmail />
                <span className="ContactMe__cardTitle">lautarosilverii</span>
                <span>Correo </span>
            </a>
        </div>

        <p style={{ fontSize:'1.1em', margin:'2em 0' }}>Tambien puedes llenar el siguiente formulario ↓</p>

        <Form />

        {/* <div className="ContactMe__information">
            <span>
                <MdLocationPin />
                Olavarria, Buenos Aires
            </span>
            <span>
                <FaWhatsapp />
                +54 2284-552868
            </span>
        </div> */}

    </section>
    )
}