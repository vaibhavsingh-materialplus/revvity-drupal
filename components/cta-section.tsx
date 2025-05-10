import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Work?</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Discover how Revvity's innovative solutions can accelerate your research, improve your diagnostics, and
          transform your operations.
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
  )
}
