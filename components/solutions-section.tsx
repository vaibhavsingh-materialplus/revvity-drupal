import Link from "next/link"
import Image from "next/image"

export default function SolutionsSection() {
  const solutions = [
    {
      id: 1,
      title: "Pharma & Biotech",
      description: "Accelerate drug discovery and development with our comprehensive solutions.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/solutions/pharma-biotech",
    },
    {
      id: 2,
      title: "Clinical Labs",
      description: "Enhance efficiency and accuracy in clinical diagnostics and testing.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/solutions/clinical-labs",
    },
    {
      id: 3,
      title: "Academic & Government",
      description: "Support groundbreaking research with innovative tools and technologies.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/solutions/academic-government",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions by Industry</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Tailored solutions to address the unique challenges and opportunities in your industry.
          </p>
        </div>

        {solutions.map((solution, index) => (
          <div
            key={solution.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
              <p className="text-gray-700 mb-6">{solution.description}</p>
              <Link
                href={solution.link}
                className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200"
              >
                Explore Solutions
              </Link>
            </div>

            <div className={`relative h-64 md:h-auto ${index % 2 === 1 ? "md:order-1" : ""}`}>
              <Image
                src={solution.image || "/placeholder.svg"}
                alt={solution.title}
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
