import React, { useRef } from 'react'
import './Testimonials.css'
import next from '../../assets/next-icon.png'
import back from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


export default function Testimonials() {
 
   const slider=useRef();
   let tx=0;
  const changeBackward=()=>{
     if(tx>-50){
         tx-=25;
     }
   slider.current.style.transform=`translate(${tx}%)`
  }
  const changeForward=()=>{
   if(tx<0){
      tx+=25;
  }
slider.current.style.transform=`translate(${tx}%)`
  }  

  return (
    <div className='testimonials'> 
       <img src={next} alt='' className='next-btn' onClick={changeBackward}/>
       <img src={back} alt='' className='back-btn'onClick={changeForward}/>
       <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                       <div className='user-info'>
                         <img src={user_1} alt=""/>
                         <div>
                            <h3>William jackson</h3>
                            <span>Edusity, USA</span>
                         </div>
                       </div>
                       <p>It seems like you might have typed "college" by mistake. If you meant to ask a question or request help with something related to the error message you provided earlier, please feel free to ask, and I'll do my best to assist you.    
                       </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                       <div className='user-info'>
                         <img src={user_2} alt=""/>
                         <div>
                            <h3>William jackson</h3>
                            <span>Edusity, USA</span>
                         </div>
                       </div>
                       <p>It seems like you might have typed "college" by mistake. If you meant to ask a question or request help with something related to the error message you provided earlier, please feel free to ask, and I'll do my best to assist you.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                       <div className='user-info'>
                         <img src={user_3} alt=""/>
                         <div>
                            <h3>William jackson</h3>
                            <span>Edusity, USA</span>
                         </div>
                       </div>
                       <p>It seems like you might have typed "college" by mistake. If you meant to ask a question or request help with something related to the error message you provided earlier, please feel free to ask, and I'll do my best to assist you.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                       <div className='user-info'>
                         <img src={user_4} alt=""/>
                         <div>
                            <h3>William jackson</h3>
                            <span>Edusity, USA</span>
                         </div>
                       </div>
                       <p>It seems like you might have typed "college" by mistake. If you meant to ask a question or request help with something related to the error message you provided earlier, please feel free to ask, and I'll do my best to assist you.</p>
                    </div>
                </li> 
            </ul>
       </div>
    </div>
  )
}
