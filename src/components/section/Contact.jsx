//-----> Assets
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { MdLocationPin, MdEmail } from "react-icons/md"

//-----> Components
import { Form } from "../"


export function Contact(){

    return(
    <section className="ContactMe" id="ContactMe" style={{ scrollMarginTop:'5em' }}>
        
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
            <div className="ContactMe__card">
                <FaWhatsapp />
                <span className="ContactMe__cardTitle">+54 2284-552868</span>
                <span>WhatsApp</span>
            </div>
        </div>

        <h3 className="ContactMe__h3">Contactame</h3>

        <Form />

        <div className="ContactMe__information">
            <span>
                <MdLocationPin />
                Olavarria, Buenos Aires, Argentina
            </span>
            <span>
                <MdEmail />
                lautarosilverii@gmail.com
            </span>
        </div>

    </section>
    )
}