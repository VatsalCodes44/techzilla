import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Mic, Coffee, Palette } from "lucide-react"

export function Timeline() {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-purple-500 to-blue-500 transform -translate-x-1/2"></div>

      {/* Timeline Items */}
      <div className="space-y-12">
        {/* Item 1 */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="md:text-right md:pr-12">
            <Badge className="mb-2 bg-orange-500 hover:bg-orange-600">11:00 AM - 01:00 PM</Badge>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4 md:flex-row-reverse">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <Mic className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Tech Speaker Session</h3>
                </div>
                <p className="text-gray-300">
                  Kickstart the event with an inspiring Tech Talk by industry experts! Gain insights into cutting-edge
                  technologies, software development trends, and the future of UI/UX.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="hidden md:block"></div>

          {/* Circle on timeline */}
          <div className="absolute left-4 md:left-1/2 top-6 w-6 h-6 rounded-full bg-orange-500 transform -translate-x-1/2 z-10"></div>
        </div>

        {/* Item 2 */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="hidden md:block"></div>

          <div className="md:pl-12">
            <Badge className="mb-2 bg-purple-500 hover:bg-purple-600">1:00 PM - 2:00 PM</Badge>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden hover:border-purple-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Coffee className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Break & Refreshments</h3>
                </div>
                <p className="text-gray-300">
                  Enjoy a refreshing break with delicious food and networking opportunities. Connect with fellow tech
                  enthusiasts and speakers before diving into the UI Expo!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Circle on timeline */}
          <div className="absolute left-4 md:left-1/2 top-6 w-6 h-6 rounded-full bg-purple-500 transform -translate-x-1/2 z-10"></div>
        </div>

        {/* Item 3 */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="md:text-right md:pr-12">
            <Badge className="mb-2 bg-blue-500 hover:bg-blue-600">2:00 PM - 4:00 PM</Badge>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4 md:flex-row-reverse">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Palette className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">UI Expo</h3>
                </div>
                <p className="text-gray-300">
                  Unleash your creativity at the UI Expo, where participants showcase their best UI/UX designs. Witness
                  innovative designs, interactive prototypes, and futuristic UI concepts.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="hidden md:block"></div>

          {/* Circle on timeline */}
          <div className="absolute left-4 md:left-1/2 top-6 w-6 h-6 rounded-full bg-blue-500 transform -translate-x-1/2 z-10"></div>
        </div>
      </div>
    </div>
  )
}

