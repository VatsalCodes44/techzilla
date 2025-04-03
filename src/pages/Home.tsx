import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { CalendarDays, Clock, MapPin, Award, Zap, Users, Coffee, ChevronRight } from "lucide-react"
import ParticleBackground from "../components/particle-background"
import AnimatedCounter from "../components/animated-counter"
import { HeroSection } from "../components/hero-section"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { SpeakerCard } from "../components/speaker-card"
import { Timeline } from "../components/timeline"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <ParticleBackground />

      <Navbar />

      <main className="relative z-10">
        <HeroSection />

        {/* Event Overview */}
        <section className="py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-4 py-1 border-orange-500 text-orange-500 bg-transparent">
                EVENT OVERVIEW
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600">
                Join the Tech Revolution
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Join us for Techzilla, an electrifying event that brings together tech enthusiasts, designers, and
                innovators for an unforgettable experience!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                    <CalendarDays className="w-6 h-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-white">Date</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">15-April!!</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-purple-500" />
                  </div>
                  <CardTitle className="text-white">Venue</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">To Be Decided</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-white">Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">11:00 A.M. - 04:00 P.M.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tech Speaker Session */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-gray-900 to-gray-800 relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] bg-center opacity-5"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-4 py-1 border-orange-500 text-orange-500 bg-transparent">
                TECH SPEAKER SESSION
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600">
                Learn from the Best
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Kickstart the event with an inspiring Tech Talk by industry experts! Gain insights into cutting-edge
                technologies, software development trends, and the future of UI/UX.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <SpeakerCard
                name="Speaker Name"
                role="Tech Lead"
                company="Company"
                imageSrc="/elonn.jpg"
                topic="Future of Web Development"
              />
              <SpeakerCard
                name="Speaker Name"
                role="UX Designer"
                company="Company"
                imageSrc="/trump.avif"
                topic="UI/UX Trends 2025"
              />
              <SpeakerCard
                name="Speaker Name"
                role="Innovation Director"
                company="Company"
                imageSrc="/jensen.webp"
                topic="Tech Innovation"
              />
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-white">Insights from Tech Leaders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Get exclusive insights from industry leaders on emerging technologies and future trends.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-purple-500" />
                  </div>
                  <CardTitle className="text-white">Live Demos & Interactive Q&A</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Experience live demonstrations and engage directly with speakers in interactive Q&A sessions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                    <Coffee className="w-6 h-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-white">Networking Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Connect with fellow tech enthusiasts, potential employers, and industry professionals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 px-4 md:px-8 lg:px-16 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-4 py-1 border-orange-500 text-orange-500 bg-transparent">
                EVENT SCHEDULE
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600">
                Event Timeline
              </h2>
            </div>

            <Timeline />
          </div>
        </section>

        {/* UI Expo */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-gray-900 to-gray-800 relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] bg-center opacity-5"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-4 py-1 border-orange-500 text-orange-500 bg-transparent">
                UI EXPO
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 p-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600">
                Design Meets Innovation
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Unleash your creativity at the UI Expo, where participants showcase their best UI/UX designs. Witness
                innovative designs, interactive prototypes, and futuristic UI concepts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="relative overflow-hidden rounded-xl group">
                <img
                  src="/uiux.webp"
                  alt="UI Design Showcase"
                  className="w-full h-auto rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">UI Design Showcase</h3>
                    <p className="text-gray-300">Explore innovative UI designs from talented creators</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl group">
                <img
                  src="/prototype.jpg"
                  alt="Interactive Prototypes"
                  className="w-full h-auto rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Interactive Prototypes</h3>
                    <p className="text-gray-300">Experience cutting-edge interactive design concepts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-white text-2xl">Prizes & Recognition!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg">
                    Top designs will be awarded exciting prizes and featured on our platform. Don't miss the chance to
                    showcase your skills and win big!
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 p-6 rounded-xl border border-yellow-500/30">
                      <h4 className="text-yellow-500 font-bold text-xl mb-2">1st Prize</h4>
                      <p className="text-gray-300">10 GPA in upcoming semester</p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-400/20 to-gray-500/20 p-6 rounded-xl border border-gray-400/30">
                      <h4 className="text-gray-400 font-bold text-xl mb-2">2nd Prize</h4>
                      <p className="text-gray-300">3 S grades in upcoming semester</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-6 rounded-xl border border-orange-500/30">
                      <h4 className="text-orange-500 font-bold text-xl mb-2">3rd Prize</h4>
                      <p className="text-gray-300">1 S grade in upcoming semester</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 md:px-8 lg:px-16 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <AnimatedCounter value={300} duration={2} className="text-4xl md:text-5xl font-bold text-orange-500" />
                <p className="text-gray-300 mt-2">Expected Attendees</p>
              </div>
              <div className="text-center">
                <AnimatedCounter value={20} duration={2} className="text-4xl md:text-5xl font-bold text-purple-500" />
                <p className="text-gray-300 mt-2">UI Showcases</p>
              </div>
              <div className="text-center">
                <AnimatedCounter value={3} duration={2} className="text-4xl md:text-5xl font-bold text-blue-500" />
                <p className="text-gray-300 mt-2">Tech Speakers</p>
              </div>
              <div className="text-center">
                <AnimatedCounter value={4} duration={2} className="text-4xl md:text-5xl font-bold text-green-500" />
                <p className="text-gray-300 mt-2">Event Hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-600 to-purple-700 relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] bg-center opacity-10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Ready to Join TechZilla 2.0?
              </h2>
              <p className="text-white/80 max-w-3xl mx-auto text-lg mb-8">
                Don't miss this opportunity to be part of the most exciting tech event of the year! Register now to
                secure your spot.
              </p>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 hover:text-orange-700">
                Register Now <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

