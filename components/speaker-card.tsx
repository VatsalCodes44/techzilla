import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SpeakerCardProps {
  name: string
  role: string
  company: string
  imageSrc: string
  topic: string
}

export function SpeakerCard({ name, role, company, imageSrc, topic }: SpeakerCardProps) {
  return (
    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden group hover:border-orange-500/50 transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <Badge className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600">{topic}</Badge>
      </div>
      <CardContent className="pt-4">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-gray-400 mb-2">
          {role} at {company}
        </p>
      </CardContent>
    </Card>
  )
}

