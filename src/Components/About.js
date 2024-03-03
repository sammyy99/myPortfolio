import React, { useEffect, useState } from 'react'
import { aboutImg, aboutMe1, aboutMe2, aboutMe3 } from '../Utils&Constants/constants'
import { Typewriter } from 'react-simple-typewriter'

const About = () => {

    const [imgIndex, setImgIndex] = useState(0)
    
    const handleImg = ()=>{
        if (imgIndex === (aboutImg.length - 1)) {
            setImgIndex(0)
        } else {
            setImgIndex(imgIndex+1)
        }
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{handleImg()},3400)
        return()=>{clearTimeout(timer)}
    },[imgIndex])


  return (
    <div id='about' className='text-green-500 mt-2 md:mt-6 mx-2 md:mx-6 py-6 md:py-10 bg-black bg-opacity-50 rounded-lg font-mono'>
        <div className='flex justify-center text-3xl md:text-4xl font-semibold'>{"About me"}</div>
        <div className='md:flex md:justify-between my-6 md:my-12'>
            <div className='md:w-1/2'>
              <div className=''>
                <div className='flex justify-center px-3 md:px-0 '>
                    <img alt='' className='md:w-[35rem] rounded-3xl shadow-md shadow-green-500' src={aboutImg[imgIndex]}></img>
                </div>
                <div className='flex justify-center mt-8 text-xl'>
                <Typewriter
                words={["<SAAS-Applications/>", "<Multiple-Device-Support/>","<Scalable Web-Apps/>","<OpenAI-Integration/>"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1400}
              />
                </div>
              </div>
            </div>
            <div className='md:w-1/2'>
            <div className='my-8 mx-4 md:mx-8 text-center md:text-left'>
                <div>{aboutMe1}</div>
                <div className='my-6 md:my-10'>{aboutMe2}</div>
                <div>{aboutMe3}</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About
