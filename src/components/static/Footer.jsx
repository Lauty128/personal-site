//----- Assets
    import { FaLinkedin , FaGithub, FaInstagram, FaFacebook } from "react-icons/fa"


export function Footer(){

    return <footer className="Footer">
        <div className="Footer__content">
            <span className="Footer__name">Lautaro Silverii</span>

            <div className="">
                <a href="https://github.com/Lauty128" className="Footer__network">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/lautaro-silverii-8a5750209/" className="Footer__network">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/silverii_lautaro03/" className="Footer__network">
                    <FaInstagram />
                </a>
                <a href="https://www.facebook.com/lautaro.silverii.5" className="Footer__network">
                    <FaFacebook />
                </a>
            </div>
        </div>
        <p className="Footer__p">Joven desarrollador web de Argentina</p>

        <p className="Footer__bottom">© Copyright | 💻 With NextJS</p> 
    </footer>
}