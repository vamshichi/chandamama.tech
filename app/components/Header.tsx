"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Logo from '@/app/icon.png'
import Image from 'next/image'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-white shadow-md z-50 relative">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800 flex">
        <Image src={Logo} alt="Chandamama Logo" width={60} height={60} />
        <p className='pt-4 font-serif text-black'>Chandamama</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/news">News</NavLink>
          <NavLink href="/ebooks">Courses</NavLink>
          <NavLink href="/gadgets">Gadgets</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              <NavLink href="/" onClick={toggleMenu}>Home</NavLink>
              <NavLink href="/news" onClick={toggleMenu}>News</NavLink>
              <NavLink href="/ebooks" onClick={toggleMenu}>Courses</NavLink>
              <NavLink href="/gadgets" onClick={toggleMenu}>Gadgets</NavLink>
              <NavLink href="/about" onClick={toggleMenu}>About</NavLink>
              <NavLink href="/contact" onClick={toggleMenu}>Contact</NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-gray-800 transition duration-300"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
