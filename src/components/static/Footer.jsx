//----- Assets
    import { FaLinkedin , FaGithub, FaInstagram, FaYoutube } from "react-icons/fa"
    import { SiVsco } from "react-icons/si";

export function Footer(){

    return <footer className="Footer">
        <div className="Footer__content">
            <span className="Footer__name">Lautaro Silverii</span>

            <div className="">
                <a href="https://github.com/Lauty128" className="Footer__network" title="Github">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/lautaro-silverii-8a5750209/" className="Footer__network" title="Linkedin">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/silverii_lautaro03/" className="Footer__network" title="Instagram">
                    <FaInstagram />
                </a>
                <a href="https://www.youtube.com/channel/UCVxMhUWW3RQP_U8nt8Q8mLQ" className="Footer__network" title="Youtube">
                    <FaYoutube />
                </a>
                <a href="https://vsco.co/silveriilautaro/gallery" className="Footer__network" title="Vsco">
                    <SiVsco />
                </a>
            </div>
        </div>
        <p className="Footer__p">Joven desarrollador web de Argentina</p>

        <p className="Footer__bottom">© Copyright | 💻 With NextJS</p> 
    </footer>
}