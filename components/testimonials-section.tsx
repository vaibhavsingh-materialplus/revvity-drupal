import Image from "next/image"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Revvity's innovative solutions have significantly accelerated our research timeline and improved the quality of our results.",
      author: "Dr. Sarah Johnson",
      title: "Research Director, PharmaTech Inc.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      quote:
        "The support and expertise provided by the Revvity team has been invaluable to our clinical diagnostic operations.",
      author: "Michael Chen",
      title: "Lab Director, Central Medical Labs",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      quote:
        "Revvity's platforms have transformed our workflow, increasing efficiency while maintaining the highest standards of accuracy.",
      author: "Dr. Emily Rodriguez",
      title: "Professor, University Research Center",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hear from professionals who have transformed their work with Revvity solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4 text-gray-400">
                <Quote className="h-8 w-8" />
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
