import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  Shop: [
    { label: "Health Mix", href: "/shop?category=health-mix" },
    { label: "Beauty Products", href: "/shop?category=beauty" },
    { label: "Bundles", href: "/shop?category=bundles" },
    { label: "Subscriptions", href: "/subscriptions" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Ingredients", href: "/ingredients" },
    { label: "Careers", href: "/careers" },
  ],
  Support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Shipping & Returns", href: "/shipping" },
    { label: "Track Order", href: "/track" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground/70">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-display text-2xl font-bold text-primary-foreground">
              Pure<span className="text-gold">Roots</span>
            </Link>
            <p className="text-sm mt-4 leading-relaxed max-w-xs">
              Premium natural wellness and beauty products crafted with love and backed by science.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-primary-foreground text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">© 2026 PureRoots. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
