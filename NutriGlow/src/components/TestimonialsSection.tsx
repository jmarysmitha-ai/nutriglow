import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Wellness Coach",
    text: "The Green Vitality Mix has completely transformed my morning routine. I feel energized all day without any crash. The ingredients are top-notch!",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Emily Chen",
    role: "Beauty Blogger",
    text: "I've tried dozens of face serums, and PureRoots' Radiance Serum is hands down the best. My skin has never looked this clear and luminous.",
    rating: 5,
    avatar: "EC",
  },
  {
    name: "David Rodriguez",
    role: "Fitness Enthusiast",
    text: "Finally, a protein blend that tastes amazing and doesn't have any artificial junk. The turmeric blend is my new post-workout staple.",
    rating: 5,
    avatar: "DR",
  },
];

export function TestimonialsSection() {
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
            Loved by Thousands
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Real reviews from our community of wellness seekers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative bg-card p-8 rounded-2xl shadow-soft border border-border"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-card-foreground leading-relaxed mb-6 font-body">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-card-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
