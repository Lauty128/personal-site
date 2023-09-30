//----- Dependencies
    import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'


export function Header(){

    return <header className='Header' id="Home">

    <div className="Header__textContainer">
        <h1 className="Header__h1">LAUTARO SILVERII</h1>

        <h3 className="Header__h3">DESARROLLADOR WEB</h3>

        <div className="Header__networks">
            <a className="Header__network-icon" href="https://www.facebook.com/lautaro.silverii.5"> 
                <FaFacebookF/> 
            </a>
            <a className="Header__network-icon" href="https://www.linkedin.com/in/lautaro-silverii-8a5750209/">
                <FaLinkedinIn />
            </a>
            <a className="Header__network-icon" href="https://github.com/Lauty128">
                <FaGithub />
            </a>
        </div>
    </div>

</header>
}