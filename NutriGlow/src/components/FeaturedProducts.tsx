import { motion } from "framer-motion";
import { Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

import productHealthmix from "@/assets/product-healthmix.jpg";
import productSerum from "@/assets/product-serum.jpg";
import productTurmeric from "@/assets/product-turmeric.jpg";
import productMask from "@/assets/product-mask.jpg";
import productHairoil from "@/assets/product-hairoil.jpg";
import productBerry from "@/assets/product-berry.jpg";

const products = [
  { id: 1, name: "Green Vitality Mix", price: 34.99, rating: 4.9, reviews: 128, image: productHealthmix, category: "Health Mix", badge: "Best Seller" },
  { id: 2, name: "Radiance Face Serum", price: 42.99, rating: 4.8, reviews: 96, image: productSerum, category: "Beauty", badge: "New" },
  { id: 3, name: "Golden Turmeric Blend", price: 28.99, rating: 4.7, reviews: 203, image: productTurmeric, category: "Health Mix", badge: null },
  { id: 4, name: "Rose Clay Face Mask", price: 36.99, rating: 4.9, reviews: 154, image: productMask, category: "Beauty", badge: "Popular" },
  { id: 5, name: "Nourishing Hair Oil", price: 29.99, rating: 4.6, reviews: 87, image: productHairoil, category: "Beauty", badge: null },
  { id: 6, name: "Berry Superfood Blend", price: 32.99, rating: 4.8, reviews: 112, image: productBerry, category: "Health Mix", badge: "New" },
];

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Handpicked favorites loved by our community.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={640}
                  height={640}
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                  {product.category}
                </p>
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  <Star className="h-4 w-4 fill-gold text-gold" />
                  <span className="text-sm font-medium text-foreground">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-foreground">${product.price}</span>
                  <Button size="sm" className="rounded-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
