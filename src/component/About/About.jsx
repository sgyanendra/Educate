import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={about_img} className='about-img'/>
                <img src={play_icon} className='play-icon' onClick={()=>{
                    setPlayState(true)}}/>
            </div>
            <div className='about-right'>
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>The admissions section is crucial for prospective students and should include detailed information on the programs offered, the application process, tuition and fees, and available scholarships and financial aid. An academics section should list the university's departments and faculties, research opportunities, library resources, and the academic calendar. To enhance student life, the website should offer information on housing and dining options, student organizations, health and wellness services, and campus safety measures.</p>
            </div>
        </div>
    )
}

export default About 
