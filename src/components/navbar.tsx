"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Menu, X } from "lucide-react"
import { useMobile } from "../hooks/use-mobile"

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
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Mozilla Firefox Club Logo"
              className="w-10 h-10 object-contain"
            />
          </div>
          <div>
            <span className="text-white font-bold text-lg">Mozilla Firefox Club</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" onClick={()=> {
            window.scrollTo({ top: 0, behavior: "smooth" })
          }} className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/" onClick={()=> {
            window.scrollTo({ top: 1400, behavior: "smooth" })
          }} className="text-gray-300 hover:text-white transition-colors">
            Speakers
          </Link>
          <Link to="/" onClick={()=> {
            window.scrollTo({ top: 2670, behavior: "smooth" })
          }} className="text-gray-300 hover:text-white transition-colors">
            Schedule
          </Link>
          <Link to="/" onClick={()=> {
            window.scrollTo({ top: 3700, behavior: "smooth" })
          }} className="text-gray-300 hover:text-white transition-colors">
            UI Expo
          </Link>
          <Link to="/" onClick={()=> {
            window.scrollTo({ top: 5200, behavior: "smooth" })
          }} className="text-gray-300 hover:text-white transition-colors">
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
              to="/"
              onClick={()=> {
                setIsMenuOpen(false)
                window.scrollTo({ top:0, behavior: "smooth" })
              }}
              className="text-gray-300 hover:text-white py-3 border-b border-gray-800"
              
            >
              Home
            </Link>
            <Link
              to="/"
              onClick={()=> {
                setIsMenuOpen(false)
                window.scrollTo({ top:1850, behavior: "smooth" })
              }}
              className="text-gray-300 hover:text-white py-3 border-b border-gray-800"
            >
              Speakers
            </Link>
            <Link
              to="/"
              onClick={()=> {
                setIsMenuOpen(false)
                window.scrollTo({ top:4900, behavior: "smooth" })
              }}
              className="text-gray-300 hover:text-white py-3 border-b border-gray-800"
            >
              Schedule
            </Link>
            <Link
              to="/"
              onClick={()=> {
                setIsMenuOpen(false)
                window.scrollTo({ top:5900, behavior: "smooth" })
              }}
              className="text-gray-300 hover:text-white py-3 border-b border-gray-800"
            >
              UI Expo
            </Link>
            <Link
              to="/"
              onClick={()=> {
                setIsMenuOpen(false)
                window.scrollTo({ top:10500, behavior: "smooth" })
              }}
              className="text-gray-300 hover:text-white py-3 border-b border-gray-800"
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

