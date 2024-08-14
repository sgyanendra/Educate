import { useState } from "react";
import About from "./component/About/About";
import Campus from "./component/Campus/Campus";
import Contacts from "./component/Contacts/Contacts";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Programs from "./component/Program/Programs";
import Testimonials from "./component/Testimonials/Testimonials";
import Title from "./component/Title/Title";
import VideoPlayer from "./component/VideoPlayer/VideoPlayer";


const App=()=>{
 
    const [playState,setPlayState]=useState(false);
     
    return (
        <>
        <Navbar/>
        <Hero/>
        <div className="container">
        <Title subTitle='our program' title='what we offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='gallery' title='campus photos'/>
        <Campus/>
        <Title subTitle='testimonials' title='what student says'/>
        <Testimonials/>
        <Title subTitle='Contact us' title='Get in touch'/>
        <Contacts/>
        <Footer/> 
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
        </>
    )
}

export default App;