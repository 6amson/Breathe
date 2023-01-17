import React from "react";
import { useEffect, useState } from "react";
import '../css/style.css'
import { useNavigate } from "react-router-dom";


export default function Slider() {

    const [currentSlider, setCurrentSlider] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        const slides = document.querySelectorAll('.testSlider_pri');
        const testslider = document.getElementsByClassName('testSlider_main')


        let current = 1;

        showslides(current);

        function nextslide() {
            showslides(current += 1)
        }

        function showslides(n) {
            //console.log(slides.length);
            if (n > slides.length) {
                current = 1
            }
            if (n < 1) {
                current = slides.length
            }



            for (let slide of slides) {
                setCurrentSlider(slide)
                slide.style.display = 'none'
            }

            slides[current - 1].style.display = 'block'

            setTimeout(() => {
                slides[current - 1].classList.toggle('slidefinal');
                if (current === 4) {

                    slides[current - 1].classList.remove('slidefinal');
                    slides[current - 1].classList.toggle('fade');
                    navigate('./login')
                }
            }, 2200);

        }

        let count = 0;

        const sliderAnim = setInterval(() => {
            nextslide();
            count++
            if (count === 3) {
                clearInterval(sliderAnim);
            }
        }, 2800)



    })


    //console.log(currentSlider);

    return (
        <div className="bodyBody">
            <div className="testBody">
                <div className="testSlider_main ">
                    <div className="testSlider_pri slideTrans">
                    <div className="sliderFirstDiv"><p>Breathe.</p></div>
                        <div className="sliderSecondDiv"><p className="sliderText">Connect with others</p></div>
                        <div className="sliderThirdDiv sliderThirdDiv1"></div>
                    </div>

                    <div className="testSlider_pri slideTrans">
                    <div className="sliderFirstDiv"><p>Breathe.</p></div>
                        <div className="sliderSecondDiv"><p className="sliderText">Online session with intructors</p></div>
                        <div className="sliderThirdDiv sliderThirdDiv2"></div>
                    </div>

                    <div className="testSlider_pri slideTrans">
                    <div className="sliderFirstDiv"><p>Breathe.</p></div>
                        <div className="sliderSecondDiv"><p className="sliderText">Be part of a community</p></div>
                        <div className="sliderThirdDiv sliderThirdDiv3"></div>
                    </div>

                    <div className="testSlider_pri slideTrans">
                        <div className="sliderFirstDiv"><p>Breathe.</p></div>
                        <div className="sliderSecondDiv"><p className="sliderText">Mindfulness based stress reduction</p></div>
                        <div className="sliderThirdDiv sliderThirdDiv4"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}