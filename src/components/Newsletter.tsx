import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkle } from "./Sparkle";
import { WaveDividerAlt } from "./WaveDivider";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <section className="relative section-peach py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center relative">
          {/* Decorative Elements */}
          <Sparkle className="absolute -top-10 left-10 sparkle hidden md:block" size={24} />
          <Sparkle className="absolute top-0 right-10 sparkle sparkle-delay-1 hidden md:block" size={18} />
          <Sparkle className="absolute bottom-10 left-20 sparkle sparkle-delay-2 hidden md:block" size={20} />

          {/* Emoji Decoration */}
          <div className="text-6xl mb-6">🍰</div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary mb-4">
            Ready to taste the magic?
          </h2>
          
          <p className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            Take the first step towards sweet satisfaction – place your order 
            now or subscribe to our newsletter for updates and promo.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address ..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 px-5 rounded-full bg-background border-2 border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
            />
            <Button 
              type="submit"
              className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              <Send size={18} className="mr-2" />
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Wave Divider */}
      <WaveDividerAlt fillColor="hsl(var(--background))" className="absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default Newsletter;
