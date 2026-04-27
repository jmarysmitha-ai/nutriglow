import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import healthImg from "@/assets/product-healthmix.jpg";
import beautyImg from "@/assets/hero-beauty.jpg";

const categories = [
  {
    title: "Health Mix",
    description: "Nutrient-rich superfood powders, herbal wellness blends, and protein mixes for daily vitality.",
    image: healthImg,
    link: "/shop?category=health-mix",
    badge: "Bestseller",
  },
  {
    title: "Healthy Beauty",
    description: "Natural skincare, hair care oils, face masks, and beauty supplements for radiant glow.",
    image: beautyImg,
    link: "/shop?category=beauty",
    badge: "New Arrivals",
  },
];

export function CategorySection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Discover products that blend ancient wisdom with modern wellness science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link
                to={cat.link}
                className="group block relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={640}
                    height={480}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-gold/90 text-foreground text-xs font-semibold mb-3">
                    {cat.badge}
                  </span>
                  <h3 className="font-display text-3xl font-bold text-primary-foreground mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-3 max-w-sm">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center text-primary-foreground text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                    Explore <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
