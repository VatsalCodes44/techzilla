"use client"

import { useEffect, useRef } from "react"
import { Button } from "../../components/ui/button"
import { ChevronRight } from "lucide-react"

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const title = titleRef.current
    if (!title) return

    const letters = title.innerText.split("")
    title.innerHTML = ""

    letters.forEach((letter, i) => {
      const span = document.createElement("span")
      span.innerText = letter
      span.style.opacity = "0"
      span.style.transform = "translateY(20px)"
      span.style.display = letter === " " ? "inline" : "inline-block"
      span.style.transition = `opacity 0.5s ease, transform 0.5s ease`
      span.style.transitionDelay = `${i * 0.03}s`
      title.appendChild(span)

      setTimeout(() => {
        span.style.opacity = "1"
        span.style.transform = "translateY(0)"
      }, 100)
    })
  }, [])

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-bl from-orange-500/20 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-full bg-gradient-to-tr from-purple-600/20 to-transparent opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700">
              <span className="text-orange-500 font-medium">Mozilla Firefox Club Presents</span>
            </div>

            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight"
            >
              TechZilla 2.0
            </h1>

            <p className="text-xl md:text-2xl font-light mb-2 text-gray-300">Tech Speaker Session and UI Expo</p>

            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Ignite Innovation! Join us for an electrifying event that brings together tech enthusiasts, designers, and
              innovators for an unforgettable experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Register Now <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-purple-600/20 rounded-full blur-3xl opacity-70 animate-pulse"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
              <img src="/poster.png" alt="TechZilla Event" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                    <span className="text-white font-bold">2.0</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Tech Speaker Session & UI Expo</h3>
                    <p className="text-gray-300">A fusion of innovation and design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

