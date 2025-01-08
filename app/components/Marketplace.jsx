import { ShoppingBag, Star, ThumbsUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Marketplace() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">AI Marketplace</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Discover Top AI Plugins</h3>
            <p className="text-gray-600 mb-6">
              Our AI Marketplace offers a curated selection of the best AI plugins for various use cases. Whether you're looking to enhance your customer service, optimize your operations, or gain deeper insights from your data, we've got you covered.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center"><ShoppingBag className="h-5 w-5 mr-2 text-blue-500" /> Wide range of AI solutions</li>
              <li className="flex items-center"><Star className="h-5 w-5 mr-2 text-yellow-500" /> Vetted and reviewed by experts</li>
              <li className="flex items-center"><ThumbsUp className="h-5 w-5 mr-2 text-green-500" /> Easy integration and support</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Featured Plugins</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">AI Customer Service Assistant</h4>
                <p className="text-sm text-gray-600">Automate customer inquiries with advanced NLP</p>
              </li>
              <li>
                <h4 className="font-semibold">Predictive Analytics Engine</h4>
                <p className="text-sm text-gray-600">Forecast trends and make data-driven decisions</p>
              </li>
              <li>
                <h4 className="font-semibold">AI Content Generator</h4>
                <p className="text-sm text-gray-600">Create engaging content for your marketing campaigns</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <Button size="lg">Explore AI Marketplace</Button>
        </div>
      </div>
    </section>
  )
}

