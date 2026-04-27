import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-wellness.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Natural wellness products with superfoods and herbs"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-xs font-medium tracking-widest uppercase mb-6 backdrop-blur-sm">
            100% Natural · Organic · Cruelty-Free
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-primary-foreground mb-6">
            Nourish Your Body,{" "}
            <span className="italic text-gold">Glow</span> From Within
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg font-body leading-relaxed">
            Premium health mixes and natural beauty products crafted with
            ethically sourced superfoods and botanicals.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-base font-medium">
              <Link to="/shop">Shop Collection</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 text-base font-medium">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
