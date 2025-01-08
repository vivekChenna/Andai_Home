import { Button } from "@/components/ui/button"
import { Star, Monitor, Smartphone, Laptop } from 'lucide-react'
import VideoBackground from './VideoBackground.jsx'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] py-20 md:py-32">
      <VideoBackground />
      <div className="relative z-20 flex flex-col items-start max-w-4xl">
        {/* <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="font-semibold">#1</span>
            <span className="text-gray-400">AI App</span>
          </div>
          <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="font-semibold">+200k</span>
            <span className="text-gray-400">users</span>
          </div>
          <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="font-semibold">4.9/5</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div> */}

        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          The best AI solutions <br />in one place
        </h1>

        <div className="space-y-4 mb-12">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded bg-blue-500/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-blue-500">AI</span>
            </div>
            <span className="text-gray-300">AI Workflows, Agents, and Chatbots</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded bg-purple-500/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-purple-500">+</span>
            </div>
            <span className="text-gray-300">Natural language search for plugins</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded bg-green-500/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-green-500">+</span>
            </div>
            <span className="text-gray-300">Comprehensive AI marketplace</span>
          </div>
        </div>

        <div className="space-y-6">
          {/* <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg">
            See our plans
          </Button> */}
          
          {/* <div className="flex items-center space-x-4">
            <span className="text-gray-400">available on</span>
            <div className="flex space-x-2">
              <Monitor className="w-6 h-6 text-gray-400" />
              <Smartphone className="w-6 h-6 text-gray-400" />
              <Laptop className="w-6 h-6 text-gray-400" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

