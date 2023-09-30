'use client'

//----> Assets
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

//----> Data
import Technologies from "@/src/data/technologies.data";

//----> Hooks
import { useState } from "react"


export function ImagesCarrouselForProject({ images, alt })
{
    const [slider, setSlider] = useState(0);
    const [index, setIndex] = useState(0);
    
    //----- Functions   
    function changeImage(number){
        setIndex(index + number);

        const newSlider = slider + ((number == 1) ? -25 : 25);
        setSlider(newSlider);
    }
    
    return(
        <div className="Project__imageContainer">
            <div className="Project__images" style={{marginLeft:`${slider}em`}}>
                {
                    images.map((image, index)=>{
                        return <img src={image} key={index} alt={alt[index]} className="Project__image" />
                    })
                }

            </div>

            {/*--------------- CARROUSEL OF IMAGES --------------- */}
            {
                (images.length > 1)
                ?   <>
                    {
                        (Number(index) > 0)
                        ? <FaAngleLeft className="Project__arrowLeft" onClick={()=> changeImage(-1)} />
                        : ''
                    }
                    {
                        (Number(index) < (images.length - 1))
                        ? <FaAngleRight className="Project__arrowRight" onClick={()=> changeImage(1)} />
                        : ''
                    }
                    </>
                : ''
            }
        </div>
    )
}