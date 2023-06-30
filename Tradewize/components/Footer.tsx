"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.svg'
import alx from '../public/alxSE.svg'
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100 ">
        <div className="flex max-md:flex-col flex-wrap gap-5 justify-between px-6 py-10 sm:px-16 ">
            <div className="flex flex-col justify-start items-start gap-6">
                <div className="flex gap-4 items-center justify-center">
                <Image src={logo} alt='TradeWise' width={118} height={15} className='object-contain' />
                <Image src={alx} alt='alxSE' width={45.92} height={7} className='object-contain' />
                </div>
                <p className="text-sm font-medium text-gray-700">TradeWise 2023 <br />ALX Portfolio <br />
                All Rights Reserved &copy;</p>
            </div>
            
            
            <div className="footer__links">
                {footerLinks.map((link) =>(
                    <div key={link.title} className="footer__link">
                        <h3 className="font-bold">{link.title}</h3>
                        {link.links.map((item) => (
                            <Link 
                            key={item.title}
                            href={item.url}
                            className="text-gray-500"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>

            </div>

            <div className="flex justify-between flex-wrap items-center mt-10 border-t border-gray-100 px-6 py-10 sm:px-16">
                <p>@ 2023 TradeWise. All Rights Reserved</p>
                <div className="footer__copyrights-link font-semibold">
                    <Link
                    href={"/"} className="text-gray-500"
                    >
                    Privacy policy
                    </Link>
                    <Link
                    href={"/"} className="text-gray-500"
                    >
                    Terms of use
                    </Link>
                </div>
            </div>
        
    </footer>
  )
}

export default Footer