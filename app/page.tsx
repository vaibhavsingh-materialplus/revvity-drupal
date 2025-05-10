import Hero from "@/components/hero"
import ProductsSection from "@/components/products-section"
import ServicesSection from "@/components/services-section"
import SolutionsSection from "@/components/solutions-section"
import TestimonialsSection from "@/components/testimonials-section"
import NewsSection from "@/components/news-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductsSection />
      <ServicesSection />
      <SolutionsSection />
      <TestimonialsSection />
      <NewsSection />
      <CTASection />
    </div>
  )
}
