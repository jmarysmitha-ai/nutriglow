import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "5 Superfoods You Should Add to Your Morning Smoothie",
    excerpt: "Discover the nutrient-packed ingredients that can boost your energy and immunity naturally.",
    date: "Apr 10, 2026",
    category: "Wellness",
  },
  {
    title: "The Science Behind Natural Skincare Ingredients",
    excerpt: "Why botanical-based skincare outperforms synthetic alternatives for long-term results.",
    date: "Apr 5, 2026",
    category: "Beauty",
  },
  {
    title: "Building a Sustainable Beauty Routine That Works",
    excerpt: "Simple steps to create an eco-conscious beauty regimen without compromising on results.",
    date: "Mar 28, 2026",
    category: "Lifestyle",
  },
];

export function BlogPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Wellness Journal
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Tips, guides, and insights for a healthier, more radiant you.
            </p>
          </div>
          <Link
            to="/blog"
            className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-xl bg-muted mb-5 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                  <span className="text-4xl opacity-50">📝</span>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" /> {post.date}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
