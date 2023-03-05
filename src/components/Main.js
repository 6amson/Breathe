import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/style.css'
import homepage from '../img/homepageyoga2.png'
import teacher from '../img/homepageyoga4.png'
import progress from '../img/personYoga.png'
import connection from '../img/peopleHangingOut.png'
import video from '../img/video.png'
import course1 from '../img/peopleHangingQueer.png'
import course2 from '../img/personBeachYoga.png'
import course3 from '../img/persomYoga2.png'


import google from '../img/google.png'


export default function Main() {
    return (
        <div className='mainContainer'>
            <nav className='navigation' id='navigation'>
                <div><p>Breathe.</p></div>
                <div className='mainPageDivSearch'>
                    <span class="material-symbols-outlined searchLogo">
                        search
                    </span>
                    <input placeholder='Search'></input>
                </div>

                <div className='navigation_user'>Hi, James</div>
                <div className='navigation_icon'>
                    <span class="material-symbols-outlined">
                        mode_comment
                    </span>
                    <span class="material-symbols-outlined">
                        settings
                    </span>
                </div>
            </nav>

            <div className='mainPageDiv'>
                {/* <div className='mainPageDivSearch'>
                    
                </div> */}
                <div className='mainPageDivBoard'>
                    <div className='mainPageDivBoard1'>
                        <img className='homepageyogapic' src={homepage} />
                        <p>homeworks</p>
                    </div>
                    <div className='mainPageDivBoard2'>
                        <img className='homepageyogapic' src={teacher} />
                        <p>teachers</p>
                    </div>
                    <div className='mainPageDivBoard3'>
                        <img className='homepageyogapic' src={progress} />
                        <p>progress</p>
                    </div>
                    <div className='mainPageDivBoard4'>
                        <img className='homepageyogapic' src={connection} />
                        <p>connections</p>
                    </div>
                </div>
                <div className='mainPageDivVideo'>
                    <div className='videoPlay'>
                        <iframe
                            src="https://www.youtube.com/embed/ZiQh8jA5tVM"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                        </iframe>
                    </div>

                    <div className='videoIcon'>
                        <img className='videoPng' src={video} />
                    </div>
                </div>

                <div className='mainPageDivCourse'>
                    <div>
                        <h3 className='courseh3'>Courses:</h3>
                    </div>
                    <div className='mainPageDivCourses'>
                        <div className='mainPageDivCourses1'>
                        <img className='homepageyogapic' src={course1} />
                            <p>
                                <span class="material-symbols-outlined starIcon">
                                    star
                                </span>
                                <span>4.8 </span><strong>. </strong>
                                <span>8 weeks</span>
                            </p>

                            <p><h3>Graceful Mindfulness</h3></p>

                            <p>by Nina Simeon</p>
                        </div>

                        <div className='mainPageDivCourses1 mainPageDivCourses2'>
                        <img className='homepageyogapic' src={course2} />
                            <p>
                                <span class="material-symbols-outlined starIcon">
                                    star
                                </span>
                                <span>4.8 </span><strong>. </strong>
                                <span>8 weeks</span>
                            </p>

                            <p><h3>Fuji Garbage</h3></p>

                            <p>by Sikiru Ayinde</p>
                        </div>

                        <div className='mainPageDivCourses1'>
                        <img className='homepageyogapic' src={course3} />
                            <p>
                                <span class="material-symbols-outlined starIcon">
                                    star
                                </span>
                                <span>4.8 </span><strong>. </strong>
                                <span>8 weeks</span>
                            </p>

                            <p><h3>The separation</h3></p>

                            <p>by Jon Belllion</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}