"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Mozilla Firefox Club Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div>
            <span className="text-white font-bold text-lg">Mozilla Firefox Club</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            Speakers
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            Schedule
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            UI Expo
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Register Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
          <nav className="flex flex-col py-4 px-4">
            <Link
              href="#"
              className="text-gray-300 hover:text-white py-3 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white py-3 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Speakers
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white py-3 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white py-3 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              UI Expo
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white py-3 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Register Now</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

