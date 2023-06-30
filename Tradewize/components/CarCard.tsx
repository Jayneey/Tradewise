"use client";
import { CarProps } from '@/types';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import Image from 'next/image';
import React, { useState } from 'react'
import DemoCar from '../public/hero.png'
import steeringWheel from '../public/steering-wheel.svg'
import tire from '../public/tire.svg'
import gas from '../public/gas.svg'
import CustomButton from './CustomButton';
import rightSign from '../public/right-arrow.svg'
import CarDetails from './CarDetails';

interface CarCardProps {
    car: CarProps;
}
const CarCard = ({car}: CarCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const {city_mpg, year, make, model, drive, transmission} = car;
    const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
        <div className="car-card__content">
            <h2 className="car-card__content-title">{make} {model}</h2>  
        </div>
        <p className="flex mt-6 text-[32px] font-extrabold">
            <span className="self-start font-semibold text-[14px]">$</span>{carRent}
            <span className="self-end font-medium text-[14px]">/day</span>
        </p>
        <div className="relative w-full h-40 my-3 object-contain">
            <Image src={generateCarImageUrl(car)} alt='DemoCar' fill priority className="object-contain" />
        </div>
        <div className="relative flex w-full mt-2">
            <div className='flex group-hover:invisible w-full justify-between text-gray-500'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src={steeringWheel} width={20} height={20} alt='steering'/>
                    <p className='text-[14px]'>{transmission === 'a' ? 'Automatic' : 'Manual'}</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src={tire} width={20} height={20} alt='tire'/>
                    <p className='text-[14px]'>{drive.toUpperCase()}</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src={gas} width={20} height={20} alt='gas'/>
                    <p className='text-[14px]'>{city_mpg}MPG</p>
                </div>
            </div>

            <div className='car-card__btn-container'>
                <CustomButton
                title="View more"
                containerStyle='bg-primary-blue w-full py-[16px] rounded-full '
                textStyles="text-white text-[14px] leading-[17px] font-bold "
                rightIcon={rightSign}
                handleClick={() => setIsOpen(true)}
                />
            </div>
        </div>
        <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  )
}

export default CarCard