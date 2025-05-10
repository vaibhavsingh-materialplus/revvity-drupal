import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-2/3 h-full revvity-gradient z-0"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Accelerating life-changing innovations</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
              Revvity delivers innovative detection, imaging, informatics, and service capabilities with the aim of
              improving lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/solutions" className="btn-primary">
                Explore Solutions
              </Link>
              <Link href="/company/about" className="btn-secondary">
                Learn About Us
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Revvity Innovation"
              width={600}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
