import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <section className="py-24 bg-primary">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl font-bold text-primary-foreground mb-4">
            Join the PureRoots Family
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Get 15% off your first order plus wellness tips, new product alerts, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-full bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/30"
            />
            <Button className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 font-medium whitespace-nowrap">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-primary-foreground/50 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
