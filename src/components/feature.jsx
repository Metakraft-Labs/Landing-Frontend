import React,{useState} from 'react'
import '../Style/feature.css'
import Shadow from '../Assets/Shadow.png'
import Feature1 from '../Assets/feature-1.png'
import Feature2 from '../Assets/feature-2.png'
import Feature3 from '../Assets/feature-3.png'
import Solana from '../Assets/solana-glow.png'
import Slider from 'react-slick'
import Feature4 from '../Assets/feature-4.png'
import Feature5 from '../Assets/feature-6.png'
import Feature6 from '../Assets/feature-5.png'

function Feature() {
    const [mail1,setMail1]=useState('')
    const [mail2,setMail2]=useState('')
    const subscribe=async (news)=>{
        const crudresponse = await fetch(
            "https://blog.metakraft.live/api/newsletter/subscribe",
          {
              method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email:news,
              publicationId: "648e275cb3c039fc791a9e2b"
            })
           }
         );
         setMail1('')
         setMail2('')
          return await crudresponse.json();
    }
    const effect=(event)=>{
        event.target.classList.add('feature-shadow-1');
        event.target.classList.remove('feature-hover');
        setTimeout(()=>{   
          console.log(event.target)
          event.target.classList.remove('feature-shadow-1');
          event.target.classList.add('feature-hover');
        },2000)
    }
    const settings = {
        dots: false,
        infinite: true, // Enable infinite loop
        speed: 2000,
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false
      };
  return (
    <div className='feature'>
      <img className='feature-shadow' src={Shadow} alt="image" />
      <div  style={{display:'flex',borderBottom:"1px solid #393556"}}>
          <div style={{padding:"5.1vw 15vw 0 5.29vw",fontSize:"7vw",fontWeight:"800",borderRight:"1px solid #393556"}}>
        <div className='featureFirstFirst'>Build Metaverses</div>
        <div className='featureFirstSecond'>With Zero Code</div>
        </div>
        </div>
        <div className='feature-2'>
            <img src={Feature1} alt="image" className='feature-2-1' />
            <div className='feature-2-2'>
                <div className='feature-2-2-1'>Get Started for Free</div>
                <div className='feature-2-2-2'>Build better metaverses effortlessly! For Your  Client, Business or</div>
                <div className='feature-2-2-3'>Employee Onboarding.</div>
                <div className='feature-browsing-6_1'>
                <div className='feature-browsing-6-1' onClick={()=>{subscribe(mail1)}}>&lt;</div>
                <input value={mail1} onChange={(event)=>{setMail1(event.target.value)}} type="text" className='feature-browsing-6-2' placeholder='Enter Your Email'/>
                </div>
            </div>
        </div>
        <div className='feature-3-1'>
            Helping you focus
        </div>
        <div className='feature-3-2'>
            What really matters
        </div>
        <div className='feature-3-3'>Browser-based platform, we aim to make creators accessible to a wide range of users, regardless</div>
        <div className='feature-3-4'>of being worried about their device or hardware.</div>
        <div className='feature-3-5'>
            <img src={Feature2} className='feature-3-5-1' alt="image" />
            <button className='feature-3-5-2 feature-hover' onClick={effect}>Schedule Demo</button>
        </div>
        <div className='feature-3-6'>Compatible with all</div>
        <div className='feature-3-7'>Major tools</div>
        <div className="feature-3-8">We supports all most used asset design tools, making it easy to integrate into your workflow. Its</div>
        <div className="feature-3-9">drag-and-drop interface enables easy asset importing and creation within the platform.</div>
        <progress value='25' max='100' className="feature-3-10" style={{visibility:'hidden'}}>
        </progress>
        <div className='feature-slider'>
        <Slider {...settings}>
        <div >
        <div className='feature-3-11'>Build Metaverse to Showcase Your Products</div>
        <div className='feature-3-12'>Immersive shopping experiences are the next step in the evolution of e-commerce</div>
        <div className='feature-3-13'>
            <img src={Feature3} alt="image" className='feature-3-13-1' />
        </div>
        </div>
        <>
        <div className='feature-3-11'>Redefine your Enterprise</div>
        <div className='feature-3-12' style={{height:'2vw'}}>Immersive Employee Onboarding and Training in Digital Twins of your facilities, to Virtual</div>
        <div className='feature-3-12'>Offices for better collaboration and remote work.</div>
        <div className='feature-3-13'>
            <img src={Feature4} alt="image" className='feature-3-13-1' />
        </div>
        </>
        <>
        <div className='feature-3-11'>Enhance Real Enhance Visualization</div>
        <div className='feature-3-12'  style={{height:'2vw'}}>With Virtual home designs, Metaverse transforms real estate visualization, allowing</div>
        <div className='feature-3-12'>buyers to envision their dream homes with personalized layouts and decorated spaces</div>
        <div className='feature-3-13'>
            <img src={Feature5} alt="image" className='feature-3-13-1' />
        </div>
        </>
        <>
        <div className='feature-3-11'>Create in Minutes, not Months</div>
        <div className='feature-3-12'  style={{height:'2vw'}}>With one simple click, you can instantly publish and mint your creations,</div>
        <div className='feature-3-12'>accelerating the development process.</div>
        <div className='feature-3-13'>
            <img src={Feature6} alt="image" className='feature-3-13-1' />
        </div>
        </>
        </Slider>
        </div>
        <div className='feature-3-14'>
            <div className='feature-3-14-1'>Metaverses</div>
            <div className='feature-3-14-2'>made easy! Build, Connect, Play</div>
            <button className='feature-3-14-3 feature-hover'  onClick={effect}>Contact Us</button>
        </div>
        <div className='feature-browsing-5'>
        <div className='feature-browsing-5-1'>Stay Updated with Latest</div>
        <div className='feature-browsing-5-2'>Get Your Newsletter</div>
      <div className='feature-browsing-6'>
        <div className='feature-browsing-6-1' onClick={()=>{subscribe(mail2)}}>&lt;</div>
        <input type="text" value={mail2} onChange={(event)=>{setMail2(event.target.value)}} className='feature-browsing-6-2' placeholder='Enter Your Email'/>
      </div>
      </div>
      <img src={Solana} alt="image" className='feature-last-image'/>
    </div>
  )
}

export default Feature
