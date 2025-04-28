"use client";

import { useRouter } from "next/navigation";
import { ShoppingBag, Star, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Marketplace() {
  const router = useRouter();

  return (
    <section className="pb-20 pt-10 px-4 md:px-6 lg:px-8 relative">
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px]" />
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">AI Marketplace</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4">
              Discover Top AI Plugins
            </h3>
            <p className="text-gray-300 mb-6">
              Our AI Marketplace offers a curated selection of the best AI
              plugins for various use cases. Whether you're looking to enhance
              your customer service, optimize your operations, or gain deeper
              insights from your data, we've got you covered.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center bg-white/5 p-3 rounded-lg border border-white/10">
                <ShoppingBag className="h-5 w-5 mr-3 text-blue-400" />
                <span>Wide range of AI solutions</span>
              </li>
              <li className="flex items-center bg-white/5 p-3 rounded-lg border border-white/10">
                <Star className="h-5 w-5 mr-3 text-yellow-400" />
                <span>Vetted and reviewed by experts</span>
              </li>
              <li className="flex items-center bg-white/5 p-3 rounded-lg border border-white/10">
                <ThumbsUp className="h-5 w-5 mr-3 text-green-400" />
                <span>Easy integration and support</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-semibold mb-6">Featured Plugins</h3>
            <ul className="space-y-6">
              <li className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="font-semibold text-lg mb-2">
                  AI Customer Service Assistant
                </h4>
                <p className="text-gray-400">
                  Automate customer inquiries with advanced NLP
                </p>
              </li>
              <li className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="font-semibold text-lg mb-2">
                  Predictive Analytics Engine
                </h4>
                <p className="text-gray-400">
                  Forecast trends and make data-driven decisions
                </p>
              </li>
              <li className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="font-semibold text-lg mb-2">
                  AI Content Generator
                </h4>
                <p className="text-gray-400">
                  Create engaging content for your marketing campaigns
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full"
            onClick={() => router.push("https://marketplace.dev.andaihub.com")}
          >
            Explore AI Marketplace
          </Button>
        </div>
      </div>
    </section>
  );
}
