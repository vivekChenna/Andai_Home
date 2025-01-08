import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Globe } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="py-6 px-4 md:px-6 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white ">
          <Image src="/andai.png" alt='andai' width={65} height={65} className=' rounded-md'/>
        </Link>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:block">
            {/* <ul className="flex space-x-6">
              <li><Link href="#" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Pricing</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Tutorials</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Blog</Link></li>
            </ul> */}
          </nav>
          <div className="flex items-center space-x-2">
            {/* <Button variant="ghost" size="sm" className="text-gray-300">
              <Globe className="h-4 w-4 mr-2" />
              English
            </Button> */}
            {/* <Button variant="ghost" className="text-gray-300 hover:text-white">
              Login
            </Button> */}
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

