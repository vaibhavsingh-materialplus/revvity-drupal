import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      title: "Research & Development",
      description: "Innovative tools and technologies for scientific discovery and development.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/products/research-development",
    },
    {
      id: 2,
      title: "Clinical & Diagnostics",
      description: "Advanced solutions for clinical research, diagnostics, and patient care.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/products/clinical-diagnostics",
    },
    {
      id: 3,
      title: "Platforms & Automation",
      description: "Integrated platforms and automation solutions for increased efficiency.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/products/platforms-automation",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our comprehensive range of products designed to advance scientific discovery and improve healthcare
            outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="relative h-48">
                <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link href={product.link} className="inline-flex items-center text-black font-medium hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
