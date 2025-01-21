"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative  pt-32 pb-28 bg-[#0A0B14] overflow-hidden px-4">
      <div className="container relative z-10 mx-auto flex flex-col items-center lg:items-start">
        {/* Left Content */}
        <div className="max-w-4xl text-center lg:text-left">
          {/* Optional Badges */}
          <div className="flex flex-wrap items-center gap-4 mb-8 py-2 justify-center lg:justify-start"></div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            The best AI solutions <br /> in one place
          </h1>

          {/* New Description Line */}
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Andaihub provides cutting-edge AI workflows, intelligent agents,
            advanced chatbots, easy-to-integrate AI Plugins, and a comprehensive
            AI Marketplace to revolutionize your operations.
          </p>

          <div className="space-y-4 mb-12">
            <div className="flex items-center space-x-2 justify-center lg:justify-start">
              <div className="w-6 h-6 rounded bg-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-blue-400">AI</span>
              </div>
              <span className="text-gray-300">
                AI Workflows, Agents, and Chatbots
              </span>
            </div>
            <div className="flex items-center space-x-2 justify-center lg:justify-start">
              <div className="w-6 h-6 rounded bg-purple-500/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-purple-400">+</span>
              </div>
              <span className="text-gray-300">
                Natural language search for plugins
              </span>
            </div>
            <div className="flex items-center space-x-2 justify-center lg:justify-start">
              <div className="w-6 h-6 rounded bg-green-500/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-green-400">+</span>
              </div>
              <span className="text-gray-300">
                Comprehensive AI marketplace
              </span>
            </div>
          </div>

          {/* Optional Buttons */}
          {/* Uncomment if needed */}
          {/* <div className="space-y-6">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full">
              See our plans
            </Button>
          </div> */}
        </div>

        <div className="flex sm:gap-6 gap-10 w-full sm:justify-center sm:items-center sm:flex-row flex-col">
          {/* Explore AI Plugins Button */}
          <Button
            onClick={() => {
              router.push("https://app3.serverless.andaihub.com/latest");
            }}
            className="bg-[#6C63FF] hover:bg-[#5850CC] 
               text-white font-medium text-lg 
               px-8 py-4 rounded-md shadow-lg 
               transition-all duration-300"
          >
            Explore AI Plugins
          </Button>

          {/* Visit AI Marketplace Button */}
          <Button
            onClick={() => {
              router.push("https://app3.serverless.andaihub.com/");
            }}
            className="bg-gray-800 hover:bg-gray-700 
               text-white font-medium text-lg 
               px-8 py-4 rounded-md shadow-lg 
               border border-[#6C63FF] 
               transition-all duration-300"
          >
            Visit AI Marketplace
          </Button>
        </div>
      </div>

      {/* Decorative Blur Elements */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] z-0" />
      <div className="absolute top-1/2 right-32 transform -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] z-0" />
    </section>
  );
}
