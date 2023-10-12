//----- Dependencies
    //import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'


export function Header(){

    return <header className='Header' id="Home">
            <img src={'/profile.webp'} alt="Imagen propia" className='Header__img'/>

            <div className="Header__textContainer">
                <h1 className="Header__h1">LAUTARO SILVERII</h1>
                <h3 className="Header__h3">DESARROLLADOR WEB</h3>
            </div>
        </header>
}