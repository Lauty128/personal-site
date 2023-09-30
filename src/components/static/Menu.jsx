'use client'

export function Menu(){
    
    //-------------------- Menu Button
    const toggleButton = (e)=>{
        if(window.innerWidth > 700) return;

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
            <img src={'/logo-mini.png'} alt="logo portafolio" className="Menu__image" />
        
            <div className="Menu__button" onClick={toggleButton}>
                <span className="Menu__buttonDiv1"></span>
                <span className="Menu__buttonDiv2"></span>
                <span className="Menu__buttonDiv3"></span>
            </div>
    
            <div className="Menu__links">
                <h3 className="Menu__h3 Menu__h3--main">
                    <a onClick={toggleButton} href="#Home">INICIO</a>
                </h3>
                <h3 className="Menu__h3">
                    <a onClick={toggleButton} href="#AboutMe">SOBRE MI</a>
                </h3>
                <h3 className="Menu__h3">
                    <a onClick={toggleButton} href="#Projects">PROYECTOS</a>
                </h3>
                <h3 className="Menu__h3">
                    <a onClick={toggleButton} href="#ContactMe">CONTACTAME</a>
                </h3>
            </div>
        </nav>
)}