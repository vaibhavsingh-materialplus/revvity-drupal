import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: "Revvity Announces New Breakthrough in Diagnostic Technology",
      date: "May 1, 2023",
      excerpt:
        "Revvity unveils innovative diagnostic technology that promises to revolutionize early disease detection.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/news/diagnostic-breakthrough",
    },
    {
      id: 2,
      title: "Revvity Partners with Leading Research Institutions",
      date: "April 15, 2023",
      excerpt:
        "Revvity announces strategic partnerships with top research institutions to advance scientific discovery.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/news/research-partnerships",
    },
    {
      id: 3,
      title: "Revvity Expands Global Presence with New Facilities",
      date: "March 22, 2023",
      excerpt: "Revvity continues global expansion with new state-of-the-art facilities in Europe and Asia.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/news/global-expansion",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Latest News</h2>
          <Link href="/news" className="text-black font-medium hover:underline">
            View All News
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="relative h-48">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link href={item.link} className="text-black font-medium hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
