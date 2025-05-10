"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ShoppingCart, Globe, User } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    products: false,
    services: false,
    solutions: false,
    company: false,
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = (dropdown: keyof typeof isDropdownOpen) => {
    setIsDropdownOpen({
      ...isDropdownOpen,
      [dropdown]: !isDropdownOpen[dropdown],
    })
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={toggleMenu} className="mr-4 md:mr-6 focus:outline-none" aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
            <span className="ml-2 hidden md:inline">Menu</span>
          </button>
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/placeholder.svg?height=40&width=150"
              alt="Revvity Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/account" className="text-gray-700 hover:text-black">
            <User className="h-5 w-5" />
          </Link>
          <Link href="/cart" className="text-gray-700 hover:text-black">
            <ShoppingCart className="h-5 w-5" />
          </Link>
          <div className="relative">
            <button className="flex items-center text-gray-700 hover:text-black">
              <Globe className="h-5 w-5" />
              <span className="ml-1">US</span>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="absolute w-full bg-white shadow-lg z-50">
          <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <button
                onClick={() => toggleDropdown("products")}
                className="text-lg font-semibold mb-4 flex justify-between w-full"
              >
                Products
                <span>{isDropdownOpen.products ? "−" : "+"}</span>
              </button>
              {isDropdownOpen.products && (
                <ul className="space-y-3">
                  <li>
                    <Link href="/products/research-development" className="nav-link">
                      Research & Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/clinical-diagnostics" className="nav-link">
                      Clinical & Diagnostics
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/platforms-automation" className="nav-link">
                      Platforms & Automation
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown("services")}
                className="text-lg font-semibold mb-4 flex justify-between w-full"
              >
                Services
                <span>{isDropdownOpen.services ? "−" : "+"}</span>
              </button>
              {isDropdownOpen.services && (
                <ul className="space-y-3">
                  <li>
                    <Link href="/services/preclinical" className="nav-link">
                      Preclinical Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/clinical-testing" className="nav-link">
                      Clinical Testing Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/customization" className="nav-link">
                      Customization Services
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown("solutions")}
                className="text-lg font-semibold mb-4 flex justify-between w-full"
              >
                Solutions
                <span>{isDropdownOpen.solutions ? "−" : "+"}</span>
              </button>
              {isDropdownOpen.solutions && (
                <ul className="space-y-3">
                  <li>
                    <Link href="/solutions/pharma-biotech" className="nav-link">
                      Pharma & Biotech
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/clinical-labs" className="nav-link">
                      Clinical Labs
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/academic-government" className="nav-link">
                      Academic & Government
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown("company")}
                className="text-lg font-semibold mb-4 flex justify-between w-full"
              >
                Company
                <span>{isDropdownOpen.company ? "−" : "+"}</span>
              </button>
              {isDropdownOpen.company && (
                <ul className="space-y-3">
                  <li>
                    <Link href="/company/about" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/careers" className="nav-link">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/investors" className="nav-link">
                      Investors
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/news" className="nav-link">
                      News
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div className="container mx-auto px-4 py-4 border-t">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
                <Link href="/support" className="nav-link">
                  Support
                </Link>
                <Link href="/resources" className="nav-link">
                  Resources
                </Link>
              </div>

              <div className="mt-4 md:mt-0">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search revvity.com"
                    className="pl-10 pr-4 py-2 border rounded-md w-full md:w-64"
                  />
                  <svg
                    className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
