"use client"

import { useState } from 'react';
import Logo from '../Images/logo.png';
import Link from 'next/link';
import Image from 'next/image';

 const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className="top-0 left-0 right-0 z-50" style={{ backgroundColor: '#007bff' }}>
        <div className="flex items-center justify-between p-4">
          <div className="mr-4 ml-4">
            <Link href="/">
                <Image src={Logo} alt='logo' width={300} height={50} />
            </Link>
          </div>
          <div className="hidden md:flex">
            <ul className="flex">
            <li className="mx-20 text-lg text-white" style={{ fontWeight: 'bold' }}><Link href="/events">Events</Link></li>
            <li className="mx-20 text-lg text-white" style={{ fontWeight: 'bold' }}><Link href="/pricing">Pricing</Link></li>
            <li className="mx-20 text-lg text-white" style={{ fontWeight: 'bold' }}><Link href="/reviews">Reviews</Link></li>
            <li className="mx-20 text-lg text-white" style={{ fontWeight: 'bold' }}><Link href="/about">About</Link></li>
            <li className="mx-20 text-lg text-white" style={{ fontWeight: 'bold' }}><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <button onClick={handleMenuToggle} className="md:hidden">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <ul className="flex flex-col absolute w-full md:hidden bg-blue-600">
            <li className="mx-20 text-lg text-white my-2" style={{ fontWeight: 'bold' }}><Link href="/events">Events</Link></li>
            <li className="mx-20 text-lg text-white my-2" style={{ fontWeight: 'bold' }}><Link href="/pricing">Pricing</Link></li>
            <li className="mx-20 text-lg text-white my-2" style={{ fontWeight: 'bold' }}><Link href="/reviews">Reviews</Link></li>
            <li className="mx-20 text-lg text-white my-2" style={{ fontWeight: 'bold' }}><Link href="/about">About</Link></li>
            <li className="mx-20 text-lg text-white my-2" style={{ fontWeight: 'bold' }}><Link href="/contact">Contact</Link></li>
          </ul>
        )}
      </nav>
    );
  };

export default Navigation;