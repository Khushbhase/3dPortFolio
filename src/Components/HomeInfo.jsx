import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from "../assets/icons"

const InfoBox = ({text, link, btnText})=> (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>Khush</span>👋
        <br />
        A Web Developer from INDIA </h1>
    ),

    2: (
        <InfoBox 
        text="Things what I can do, which I have done using things I know"
        link="/about"
        btnText="learn More"/>
    ),
    3: (
        <InfoBox 
        text="Built multiple projects, clones and things that interests me."
        link="/projects"
        btnText="Visit my portfolio"/>
    ),
    4: (
        <InfoBox 
        text="Need to build Website for you own brand? I am just a click away!"
        link="/contact"
        btnText="Let's Talk"/>
    )
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo