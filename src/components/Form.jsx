'use client'

//-------> Dependencies
import { useState, useRef } from "react"

//-------> Utils
import { validateInput, sendData } from "../utils/form.util"
import { toast } from "react-toastify"


export function Form(){
    //--------- Config and variables defined
    const defaultFormValues = {
        name:"",
        email:"",
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
        validateInput(e.target, value, 'ContactMe__label--error')
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
        if(data.type == 'error'){
            toast.error(data.message,{
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            return
        }
        toast.success(data.message,{
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    return(
    <>
        <form action="" className="ContactMe__form" onSubmit={submitForm}>

            <div className="ContactMe__inputContainer" data-aos="fade-left" data-aos-duration="800" >
                <label htmlFor="inputName" className="ContactMe__label">Nombre</label>
                <input type="text" name="name" id="inputName" onChange={changeValue} 
                value={values.name} className="ContactMe__input"/>
            </div>

            <div className="ContactMe__inputContainer" data-aos="fade-left" data-aos-duration="800" >
                <label htmlFor="inputName" className="ContactMe__label">Correo Electronico</label>
                <input type="text" name="email" id="inputName" onChange={changeValue} 
                value={values.email} className="ContactMe__input" />
            </div>
            
            <div className="ContactMe__inputContainer" data-aos="fade-left" data-aos-duration="800" >
                <label htmlFor="inputMessage" className="ContactMe__label">Mensaje</label>
                <textarea name="message" id="inputMessage" onChange={changeValue} 
                value={values.message} className="ContactMe__input ContactMe__textarea">
                </textarea>
            </div>

            <input type="submit" value="Enviar" className="ContactMe__submit" 
            data-aos="zoom-out" data-aos-duration="700" ref={submitButton} />

        </form>
    </>
    )
}