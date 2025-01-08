'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SearchFeature() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResult, setSearchResult] = useState<string | null>(null)

  const handleSearch = (e) => {
    e.preventDefault()
    // Simulate a search result. In a real application, this would be an API call.
    setSearchResult(`Showing results for "${searchQuery}"`)
  }

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Find the Perfect AI Plugin</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Our intelligent search understands natural language. Simply describe what you're looking for, and we'll find the right AI plugin for you.
        </p>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="flex gap-2 mb-6">
            <Input
              type="text"
              placeholder="E.g., 'I need a chatbot for customer support'"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
          {searchResult && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-800">{searchResult}</p>
              <p className="text-sm text-gray-600 mt-2">
                Here you would see a list of relevant AI plugins based on your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

