import { motion } from "framer-motion";
import { Leaf, Shield, Heart, Sparkles, Award, Recycle } from "lucide-react";

const benefits = [
  { icon: Leaf, title: "100% Organic", desc: "Certified organic ingredients sourced from trusted farms." },
  { icon: Shield, title: "Dermatologist Tested", desc: "Every product is clinically tested and approved." },
  { icon: Heart, title: "Cruelty-Free", desc: "Never tested on animals. Leaping Bunny certified." },
  { icon: Sparkles, title: "No Artificial Additives", desc: "Free from parabens, sulfates, and synthetic fillers." },
  { icon: Award, title: "GMP Certified", desc: "Manufactured in GMP-certified, FDA-registered facilities." },
  { icon: Recycle, title: "Eco-Friendly Packaging", desc: "Recyclable and biodegradable packaging materials." },
];

export function BenefitsSection() {
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
            Why Choose PureRoots?
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Transparency, purity, and results you can trust.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-card transition-shadow"
            >
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
