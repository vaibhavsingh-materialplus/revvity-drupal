import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
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
              <li>
                <Link href="/products/all" className="text-gray-600 hover:text-black">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
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
              <li>
                <Link href="/services/all" className="text-gray-600 hover:text-black">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/company/about" className="text-gray-600 hover:text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-gray-600 hover:text-black">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/company/investors" className="text-gray-600 hover:text-black">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/company/news" className="text-gray-600 hover:text-black">
                  News
                </Link>
              </li>
              <li>
                <Link href="/company/sustainability" className="text-gray-600 hover:text-black">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support/contact" className="text-gray-600 hover:text-black">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support/technical" className="text-gray-600 hover:text-black">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="/support/customer-care" className="text-gray-600 hover:text-black">
                  Customer Care
                </Link>
              </li>
              <li>
                <Link href="/support/resources" className="text-gray-600 hover:text-black">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/placeholder.svg?height=40&width=150"
                alt="Revvity Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-600 hover:text-black">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-600 hover:text-black">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-600 hover:text-black">
                <LinkedIn className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-600 hover:text-black">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com" className="text-gray-600 hover:text-black">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500 mt-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-2">
            <Link href="/legal/terms" className="hover:text-black">
              Terms of Use
            </Link>
            <Link href="/legal/privacy" className="hover:text-black">
              Privacy
            </Link>
            <Link href="/legal/cookies" className="hover:text-black">
              Cookie Policy
            </Link>
            <Link href="/legal/accessibility" className="hover:text-black">
              Accessibility
            </Link>
            <Link href="/sitemap" className="hover:text-black">
              Sitemap
            </Link>
          </div>
          <p className="text-center md:text-left">© {new Date().getFullYear()} Revvity, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
