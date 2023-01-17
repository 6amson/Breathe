//import Link from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/style.css'
import './homepage'
import Slider from './Slider'


export default function Home() {
    const [secondDiv, setSecondDiv] = useState('')
    const [logoName1, setlogoName1] = useState('')
    const [mySlider, setMySlider] = useState('')
    const [Swiper, setSwiper] = useState('')

    const navigate = useNavigate();


    useEffect(() => {
        const logoNameDiv = document.getElementsByClassName('logoNameDiv')[0];
        const logoName1 = document.getElementsByClassName('logoName1')[0];
        const secondDiv = document.getElementsByClassName('secondDiv');

        setSecondDiv(secondDiv);
        setlogoName1(logoName1);
        setMySlider('.myslider')

        setTimeout(() => {
            logoNameDiv.classList.toggle('fadeout')
            secondDiv.style.display = 'none';
            console.log(logoNameDiv)
        }, 500)

        setTimeout(() => {
            logoName1.classList.toggle('downlow')
        }, 1000)

        setTimeout(() => {
            logoNameDiv.classList.remove('downlow')
            logoNameDiv.classList.remove('fadeout')

        }, 3000)

        setTimeout(() => {
            logoNameDiv.classList.toggle('displayNone')
            //secondDiv.style.display = 'block'
            navigate('./landing')
        }, 3200)

    })





    return (


        <div className="container">

            <div className="firstDiv">
                <div className='fade fade_transition logoNameDiv'>
                    <div className="logoName logoName1 toplevel_transition toplevel">
                        <p>Breathe.</p>
                    </div>
                    <div className='imageDiv'></div>
                </div>
                
            </div>
        </div>
    )
}