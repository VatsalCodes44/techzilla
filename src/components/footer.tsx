import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8 px-4 md:px-8 lg:px-16 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Mozilla Firefox Club Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-white font-bold text-lg">Mozilla Firefox Club</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering the next generation of web innovators through community, education, and open-source
              collaboration.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#speakers" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link to="#schedule" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link to="#ui-expo" className="text-gray-400 hover:text-orange-500 transition-colors">
                  UI Expo
                </Link>
              </li>
              <li>
                <Link to="#register" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://developer.mozilla.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Mozilla Developer Network
                </a>
              </li>
              <li>
                <a
                  href="https://www.mozilla.org/firefox/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Firefox Browser
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mozilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Open Source Projects
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/standards/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Web Standards
                </a>
              </li>
              <li>
                <a
                  href="https://www.mozilla.org/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Privacy & Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
                <span className="text-gray-400">
                  Vellore Institute of Technology
                  <br />
                  Bhopal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <a
                  href="mailto:info@mozillafirefoxclub.com"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  info@mozillafirefoxclub.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-orange-500 transition-colors">
                  +91 1234567890
                </a>
              </li>
            </ul>
          </div>
        </div>

        
      </div>
    </footer>
  )
}

