import Link from "next/link"
import { ArrowRight, Beaker, FlaskRoundIcon as Flask, Microscope } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Preclinical Services",
      description: "Comprehensive preclinical services to accelerate your drug discovery and development.",
      icon: <Flask className="h-10 w-10" />,
      link: "/services/preclinical",
    },
    {
      id: 2,
      title: "Clinical Testing Services",
      description: "Advanced clinical testing services for improved patient outcomes and research.",
      icon: <Microscope className="h-10 w-10" />,
      link: "/services/clinical-testing",
    },
    {
      id: 3,
      title: "Customization Services",
      description: "Tailored solutions to meet your specific research and clinical needs.",
      icon: <Beaker className="h-10 w-10" />,
      link: "/services/customization",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We offer a wide range of services to support your research, development, and clinical needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6 card-hover">
              <div className="text-black mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href={service.link} className="inline-flex items-center text-black font-medium hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
