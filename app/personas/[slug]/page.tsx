import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"

interface PersonaPageProps {
  params: {
    slug: string
  }
}

export default function PersonaPage({ params }: PersonaPageProps) {
  // This would typically come from a CMS or API
  const personaData = getPersonaData(params.slug)

  if (!personaData) {
    return <div>Persona not found</div>
  }

  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm mb-4">
            <Link href="/" className="text-gray-600 hover:text-black">
              Home
            </Link>
            <span className="mx-2">{">"}</span>
            <Link href="/personas" className="text-gray-600 hover:text-black">
              Personas
            </Link>
            <span className="mx-2">{">"}</span>
            <span className="text-gray-600">{personaData.title}</span>
          </div>
          <h1 className="text-4xl font-bold mb-6">{personaData.title}</h1>
          <p className="text-lg text-gray-700 max-w-3xl">{personaData.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Challenges</h2>
            <ul className="space-y-4">
              {personaData.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-black mr-2 flex-shrink-0 mt-0.5" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-80 lg:h-96">
            <Image
              src={personaData.image || "/placeholder.svg"}
              alt={personaData.title}
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personaData.solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 card-hover">
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <Link href={solution.link} className="inline-flex items-center text-black font-medium hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personaData.successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.excerpt}</p>
                <Link href={story.link} className="inline-flex items-center text-black font-medium hover:underline">
                  Read full story <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/personas" className="inline-flex items-center text-black font-medium hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all personas
          </Link>
        </div>
      </div>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Contact our team to discuss your specific needs and discover how Revvity can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="/demo"
              className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Mock data function - in a real application, this would fetch from an API or CMS
function getPersonaData(slug: string) {
  const personas = {
    researchers: {
      title: "Researchers",
      description:
        "Discover innovative tools and technologies to accelerate your scientific discoveries and research outcomes.",
      image: "/placeholder.svg?height=500&width=800",
      challenges: [
        "Accelerating discovery timelines while maintaining quality",
        "Accessing cutting-edge technologies and methodologies",
        "Managing and analyzing complex datasets",
        "Collaborating effectively across disciplines and organizations",
        "Securing funding and demonstrating research impact",
      ],
      solutions: [
        {
          title: "Advanced Instrumentation",
          description: "State-of-the-art instruments designed to accelerate your research and improve data quality.",
          link: "/products/instrumentation",
        },
        {
          title: "Data Analysis Software",
          description: "Powerful software solutions to help you manage, analyze, and visualize complex research data.",
          link: "/products/software",
        },
        {
          title: "Research Services",
          description: "Comprehensive services to support your research needs, from study design to data analysis.",
          link: "/services/research",
        },
      ],
      successStories: [
        {
          title: "Accelerating Cancer Research at University Medical Center",
          excerpt:
            "Learn how researchers at University Medical Center used Revvity solutions to accelerate their cancer research program.",
          link: "/case-studies/university-medical-center",
        },
        {
          title: "Breakthrough Discoveries in Neuroscience",
          excerpt: "Discover how Revvity technologies enabled groundbreaking discoveries in neuroscience research.",
          link: "/case-studies/neuroscience-breakthroughs",
        },
      ],
    },
    "lab-directors": {
      title: "Lab Directors",
      description:
        "Optimize your lab operations with efficient workflows and reliable solutions that enhance productivity and results.",
      image: "/placeholder.svg?height=500&width=800",
      challenges: [
        "Maximizing operational efficiency and throughput",
        "Ensuring consistent quality and reliability",
        "Managing costs and resources effectively",
        "Staying current with evolving technologies and methodologies",
        "Recruiting and retaining skilled personnel",
      ],
      solutions: [
        {
          title: "Lab Automation",
          description: "Comprehensive automation solutions to increase efficiency and reduce manual errors.",
          link: "/products/automation",
        },
        {
          title: "Quality Management",
          description: "Tools and services to ensure consistent quality and regulatory compliance.",
          link: "/services/quality-management",
        },
        {
          title: "Lab Planning & Design",
          description: "Expert consultation for optimal lab design and workflow optimization.",
          link: "/services/lab-planning",
        },
      ],
      successStories: [
        {
          title: "Transforming Lab Operations at Central Diagnostics",
          excerpt:
            "See how Central Diagnostics increased throughput by 40% while reducing costs with Revvity solutions.",
          link: "/case-studies/central-diagnostics",
        },
        {
          title: "Quality Improvement at BioResearch Labs",
          excerpt:
            "Learn how BioResearch Labs achieved Six Sigma quality levels with Revvity quality management solutions.",
          link: "/case-studies/bioresearch-labs",
        },
      ],
    },
    // Additional personas would be defined here
    "healthcare-professionals": {
      title: "Healthcare Professionals",
      description: "Access advanced diagnostic tools and solutions for improved patient care and outcomes.",
      image: "/placeholder.svg?height=500&width=800",
      challenges: [
        "Delivering accurate and timely diagnostic results",
        "Improving patient outcomes through precision medicine",
        "Managing increasing test volumes efficiently",
        "Staying current with evolving diagnostic technologies",
        "Controlling costs while maintaining quality",
      ],
      solutions: [
        {
          title: "Diagnostic Solutions",
          description: "Advanced diagnostic tools for accurate and timely patient results.",
          link: "/products/diagnostics",
        },
        {
          title: "Clinical Decision Support",
          description: "Intelligent systems to support clinical decision-making and improve patient outcomes.",
          link: "/products/clinical-decision-support",
        },
        {
          title: "Healthcare IT Solutions",
          description: "Integrated IT solutions for efficient healthcare delivery and management.",
          link: "/products/healthcare-it",
        },
      ],
      successStories: [
        {
          title: "Improving Patient Outcomes at Regional Medical Center",
          excerpt:
            "Discover how Regional Medical Center improved diagnostic accuracy and patient outcomes with Revvity solutions.",
          link: "/case-studies/regional-medical-center",
        },
        {
          title: "Streamlining Diagnostics at Community Hospital",
          excerpt:
            "Learn how Community Hospital reduced turnaround times and improved efficiency with Revvity diagnostic solutions.",
          link: "/case-studies/community-hospital",
        },
      ],
    },
  }

  return personas[slug as keyof typeof personas]
}
