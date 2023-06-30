"use client";
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.svg'
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4 sm:px-16">
            <Link href={"/"} className="flex justify-center items-center">
                <Image src={logo} alt='TradeWise' width={164} height={25} className='object-contain' />
            </Link>
            <CustomButton
            title="Sign In"
            btnType="button"
            containerStyle="text-primary-blue bg-white rounded-full min-w-[130px] font-bold"
            />

        </nav>
    </header>
  )
}

export default Navbar