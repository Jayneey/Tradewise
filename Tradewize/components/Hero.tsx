"use client";
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
import HeroImage from '../public/hero.png'


const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Find, the best deals for you <span className="text-primary-blue">easily!</span>
            </h1>
            <p className="hero__subtitle">
            Unleash Your Journey with <span className="text-primary-blue font-bold">Premium</span> Wheels!
            </p>
            <CustomButton
            title="Explore Cars"
            containerStyle="bg-primary-blue text-white rounded-full mt-10 font-semibold"
            handleClick={handleScroll}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src={HeroImage} alt='hero' fill className='object-contain'/>
            </div>
                <div className='hero__image-overlay'/>
            
        </div>
    </div>
  )
}

export default Hero