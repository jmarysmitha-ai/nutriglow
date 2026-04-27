import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CategorySection } from "@/components/CategorySection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BlogPreview } from "@/components/BlogPreview";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <BenefitsSection />
        <TestimonialsSection />
        <BlogPreview />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
