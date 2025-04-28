"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          <Image
            src={`/newAndai.jpg`}
            alt="andai"
            width={65}
            height={65}
            className=" rounded-md"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <nav>
            {/* <ul className="flex space-x-8">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul> */}
          </nav>

          <div className="flex items-center space-x-4">
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-gray-300">
                  <Globe className="h-4 w-4 mr-2" />
                  English
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Spanish</DropdownMenuItem>
                <DropdownMenuItem>French</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}

            {/* <Button variant="ghost" className="text-gray-300 hover:text-white">
              Login
            </Button> */}
            <Button
              onClick={() => {
                router.push("https://marketplace.dev.andaihub.com");
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
