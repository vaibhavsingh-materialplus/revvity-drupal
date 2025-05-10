import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full revvity-gradient z-0"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex items-center text-sm mb-8">
          <Link href="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
          <span className="mx-2">{">"}</span>
          <span className="text-gray-600">Page not found</span>
        </div>

        <div className="max-w-4xl mx-auto text-center py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">We couldn't find this page</h1>
          <p className="text-lg mb-12">Check to make sure you've used the correct URL.</p>

          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative flex items-center">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="search"
                  className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-white focus:ring-black focus:border-black"
                  placeholder="Search revvity.com"
                  required
                />
              </div>
              <Button
                type="submit"
                className="absolute right-2.5 bottom-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Explore our products</h2>
              <ul className="space-y-2 text-left">
                <li>
                  <Link href="/products/research-development" className="text-gray-600 hover:text-black">
                    Research & Development
                  </Link>
                </li>
                <li>
                  <Link href="/products/clinical-diagnostics" className="text-gray-600 hover:text-black">
                    Clinical & Diagnostics
                  </Link>
                </li>
                <li>
                  <Link href="/products/platforms-automation" className="text-gray-600 hover:text-black">
                    Platforms & Automation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Explore our services</h2>
              <ul className="space-y-2 text-left">
                <li>
                  <Link href="/services/preclinical" className="text-gray-600 hover:text-black">
                    Preclinical Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/clinical-testing" className="text-gray-600 hover:text-black">
                    Clinical Testing Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/customization" className="text-gray-600 hover:text-black">
                    Customization Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Help & Other</h2>
              <ul className="space-y-2 text-left">
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-black">
                    Contact sales
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-600 hover:text-black">
                    Customer care
                  </Link>
                </li>
                <li>
                  <Link href="/technical-support" className="text-gray-600 hover:text-black">
                    Technical support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
