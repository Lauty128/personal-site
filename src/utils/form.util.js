//----------- Dependencies
import emailJs from '@emailjs/browser'


const expRegular = {
    name:/^[a-zA-Z _-]{5,30}$/,
    email: /^[\w]+@{1}[\w]+\.[a-z]{2,3}$/,
    linkedin: /^(https?:\/\/)?([a-z]+\.)?linkedin\.com\/in\/[a-z0-9_-]+\/?$/i
}

const validate = (name, value) => {
    switch (name){
        case "name":
            return expRegular.name.test(value)
        break;

        case "email":
            return expRegular.email.test(value)
        break;

        case "linkedin":
            return (expRegular.linkedin.test(value)) || (value.length == 0)
        break;

        case "message":
            return (value.length > 80) && (value.length < 3000)
        break;
    }
}

//-------------------- Validation of linkedin with <split()> and <length == 0> in case it is empty

export const validateInput =(input, value, style)=>{
    if(!validate(input.name, value)) return input.previousElementSibling.classList.add(style)
        
    if(input.previousElementSibling.classList.contains(style)) input.previousElementSibling.classList.remove(style)
}

export const validateForm = (data) => 
    (validate("name", data.name) && validate("email", data.email) && validate("message", data.message) && validate("linkedin", data.linkedin) )
    

export const formError = (button, errorFormClass) =>{
    button.classList.add(errorFormClass);
    setTimeout(()=>{ button.classList.remove(errorFormClass) }, 200 )
}


//--------------------- Send data using EmailJS
export function sendData(values, submitButton, newMessage){
    //const { name, email, linkedin, message } = values

    if(!validateForm(values)){
        formError(submitButton, 'formError')
        newMessage({
            message:'Se encontró un campo que no es válido. Por favor revisé los datos',
            type:'error'
        })
        return  
    }

    //--- Else
    // const templateParams = {
    //     name,
    //     email,
    //     linkedin,
    //     message
    // }
    submitButton.classList.add('ContactMe__submit--block')
    // emailJs.send(process.env.EMAILJS_SERVICE, process.env.EMAILJS_TEMPLATE , values , process.env.EMAILJS_KEY)
    emailJs.send('service_cq5dm6m', 'template_bvyosdm' , values , '7W6DBOmDsZB4m10Pk')
        .then(response=>{
            if(response.status == 200){
                submitButton.classList.remove('ContactMe__submit--block')
                newMessage({
                    message:'Los datos fueron enviados correctamente.',
                    type:'OK'
                })
            }
        })
        .catch(()=>{
            submitButton.classList.remove('ContactMe__submit--block')
            newMessage({
                message:'Ocurrió un error mientras se enviaba el mensaje.\nPor favor vuelve a intentarlo más tarde',
                type:'error'
            })
        })
}

