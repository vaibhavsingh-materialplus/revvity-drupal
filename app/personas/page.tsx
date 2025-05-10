import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function PersonasPage() {
  const personas = [
    {
      id: 1,
      title: "Researchers",
      description: "Discover innovative tools and technologies to accelerate your scientific discoveries.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/personas/researchers",
    },
    {
      id: 2,
      title: "Lab Directors",
      description: "Optimize your lab operations with efficient workflows and reliable solutions.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/personas/lab-directors",
    },
    {
      id: 3,
      title: "Healthcare Professionals",
      description: "Access advanced diagnostic tools and solutions for improved patient care.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/personas/healthcare-professionals",
    },
    {
      id: 4,
      title: "Pharmaceutical Developers",
      description: "Accelerate drug discovery and development with comprehensive solutions.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/personas/pharmaceutical-developers",
    },
    {
      id: 5,
      title: "Academic Institutions",
      description: "Support groundbreaking research with innovative tools and technologies.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/personas/academic-institutions",
    },
    {
      id: 6,
      title: "Government Agencies",
      description: "Partner with us to advance public health initiatives and research programs.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/personas/government-agencies",
    },
  ]

  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Solutions by Persona</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Discover tailored solutions designed to address the unique challenges and opportunities in your role.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personas.map((persona) => (
            <div key={persona.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="relative h-48">
                <Image src={persona.image || "/placeholder.svg"} alt={persona.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{persona.title}</h3>
                <p className="text-gray-600 mb-4">{persona.description}</p>
                <Link href={persona.link} className="inline-flex items-center text-black font-medium hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Not Sure Where to Start?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Contact our team to discuss your specific needs and discover how Revvity can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
