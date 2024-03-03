'use client'

//----> Components
import Image from 'next/image';


export function Menu(){
    
    //-------------------- Menu Button
    const toggleButton = (e)=>{
        if(window.innerWidth > 800) return;

        let target = e.target
        if(target.parentNode.classList.contains("Menu__h3")){
            // If <e.target == "h3"> then the value of the "target" constant is changed.To reuse the function
            target = target.parentElement
                    .parentElement.previousElementSibling;
        }
        
        target.classList.toggle("Menu__button--active")
        target.nextElementSibling.classList.toggle("Menu__links--active")
    }


    return (
        <nav className="Menu" id="Menu">
            <Image width={60} height={60} src={'/logo-light.png'} alt="logo portafolio" className="Menu__image" />
            {/* <h1 className="Menu__h1">Lautaro Silverii</h1> */}

            <div className="Menu__button" onClick={toggleButton}>
                <span className="Menu__buttonDiv1"></span>
                <span className="Menu__buttonDiv2"></span>
                <span className="Menu__buttonDiv3"></span>
            </div>
    
            <div className="Menu__links">
                <span className="Menu__h3">
                    <a onClick={toggleButton} href="#AboutMe">Sobre mi</a>
                </span>
                <span className="Menu__separator">•</span>
                <span className="Menu__h3">
                    <a onClick={toggleButton} href="#Projects">Proyectos</a>
                </span>
                <span className="Menu__separator">•</span>
                <span className="Menu__h3">
                    <a onClick={toggleButton} href="#ContactMe">Contactame</a>
                </span>
                <span className="Menu__separator">•</span>
                <span className="Menu__h3 Menu__h3--main">
                    <a onClick={toggleButton} href="/blog">Blog</a>
                </span>
                
            </div>
        </nav>
)}