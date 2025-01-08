import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-4 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-400">&copy; 2024 Andai. All rights reserved.</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

