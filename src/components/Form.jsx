'use client'

//-------> Dependencies
import { useState, useRef } from "react"

//-------> Utils
import { validateInput, sendData } from "../utils/form.util"

export function Form(){
    //--------- Config and variables defined
    const defaultFormValues = {
        name:"",
        email:"",
        linkedin:"",
        message:""
    }

    //---------------------- Change and Validate values
    const [values , setValues] = useState(defaultFormValues)

    const changeValue = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]:value
        })
        validateInput(e.target, value, 'ContactMe__input--error')
    }

    //---------------------- Submit Form
    const submitButton = useRef(null)

    const submitForm = (e) => {
        e.preventDefault()
        if(submitButton.current != null){
            sendData(values, submitButton.current, newMessage)
        }
    }

    //------------------------------ Message Card
    const Message = useRef(null)

    const newMessage = (data)=>{
        //-------- A dynamic message box is created here
        if(Message.current != null){ 
            let p = Message.current.childNodes[1]  //Reference to <p></p>
            p.textContent = data.message

            const messageBox = Message.current // Message Box <div></div>
            if(data.type == 'error'){
                messageBox.classList.add("Message--error")
                messageBox.classList.add("Message--active")

                setTimeout(()=>{ messageBox.classList.remove("Message--active") }, 2500)
                setTimeout(()=>{ messageBox.classList.remove("Message--error") }, 2800)
                return
            }
            messageBox.classList.add("Message--active")
            setTimeout(()=>{ messageBox.classList.remove("Message--active") }, 2500)
        }
    }

    return(
    <>
        <form action="" className="ContactMe__form" onSubmit={submitForm}>

            <div className="ContactMe__inputContainer" data-aos="fade-left" data-aos-duration="800" >
                <label htmlFor="inputName" className="ContactMe__label">*Nombre</label>
                <input type="text" name="name" id="inputName" onChange={changeValue} 
                value={values.name} className="ContactMe__input"/>
            </div>

            <div className="ContactMe__inputContainer" data-aos="fade-left" data-aos-duration="800" >
                <label htmlFor="inputName" className="ContactMe__label">*Correo Electronico</label>
                <input type="text" name="email" id="inputName" onChange={changeValue} 
                value={values.email} className="ContactMe__input" />
            </div>

            <div className="ContactMe__inputContainer" data-aos="fade-left" data-aos-duration="800" >
                <label htmlFor="inputName" className="ContactMe__label">Linkedin</label>
                <input type="text" name="linkedin" id="inputName" onChange={changeValue} 
                value={values.linkedin} className="ContactMe__input" />
            </div>
            
            <div className="ContactMe__inputContainer" data-aos="fade-left" data-aos-duration="800" >
                <label htmlFor="inputMessage" className="ContactMe__label">*Mensaje</label>
                <textarea name="message" id="inputMessage" onChange={changeValue} 
                value={values.message} className="ContactMe__input ContactMe__textarea">
                </textarea>
            </div>

            <input type="submit" value="ENVIAR" className="ContactMe__submit" 
            data-aos="zoom-out" data-aos-duration="700" ref={submitButton} />

        </form>

        <div className="Message" ref={Message}>
            <svg width="50px" height="50px" strokeWidth="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M11.576 1.424a.6.6 0 01.848 0l10.152 10.152a.6.6 0 010 .848L12.424 22.576a.6.6 0 01-.848 0L1.424 12.424a.6.6 0 010-.848L11.576 1.424zM12 8v4M12 16.01l.01-.011" stroke="#000000" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <p style={{color:'black'}}></p>
        </div>
    </>
    )
}