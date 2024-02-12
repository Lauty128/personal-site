//----- Dependencies
    //import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'


export function Header(){

    return <header className='Header' id="Home">
            {/* <img src={'/profile.webp'} alt="Imagen propia" className='Header__img'/> */}

            <div className="Header__textContainer">
                <span>Hola, mi nombre es</span>
                <h1 className="Header__h1">Lautaro Silverii.</h1>
                <h3 className="Header__h3">Desarrollador web</h3>
            </div>
            <div className="Header__separator"></div>
            <div className="Header__descriptionContainer">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, commodi. Necessitatibus consequuntur ipsa sint odio nihil architecto expedita reiciendis ducimus? Soluta, possimus eum magnam voluptatibus doloremque modi provident dolorum perferendis officiis odit pariatur nesciunt tempore. Non asperiores sequi ipsum repudiandae nulla recusandae.</p>
                <a href="#" className="Button--viewMore">Ver curriculum</a>
            </div>
        </header>
}