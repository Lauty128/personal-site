//----- Assets
    import { FaLinkedin , FaGithub } from "react-icons/fa"


export function Footer(){

    return <footer className="Footer">
        <h4 className="Footer__h4">LAUTARO SILVERII</h4>

        <div className="">
            <a href="https://github.com/Lauty128" className="Footer__network">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/lautaro-silverii-8a5750209/" className="Footer__network">
                <FaLinkedin />
            </a>
        </div>

        <p className="Footer__p">©Copyright | 💻 With ReactJS</p> 
    </footer>
}