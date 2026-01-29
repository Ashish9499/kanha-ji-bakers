import { Award, Palette, Truck, DollarSign, Heart } from "lucide-react";
import { Sparkle } from "./Sparkle";
import { WaveDividerAlt } from "./WaveDivider";

// Import cake images
import chocolateCake from "@/assets/product-chocolate-cake.jpg";
import vanillaCake from "@/assets/product-vanilla-cake.jpg";
import weddingCake from "@/assets/product-wedding-cake.jpg";
import birthdayCake from "@/assets/product-birthday-cake.jpg";

const features = [
  { icon: Award, label: "Quality Ingredients", variant: "primary" as const },
  { icon: Palette, label: "Personalized Designs", variant: "primary" as const },
  { icon: Truck, label: "On-Time Delivery", variant: "primary" as const },
  { icon: DollarSign, label: "Affordable Prices", variant: "primary" as const },
  { icon: Heart, label: "Made with Love", variant: "outline" as const },
];

const cakeImages = [
  { src: chocolateCake, alt: "Chocolate Cake" },
  { src: vanillaCake, alt: "Vanilla Cake" },
  { src: weddingCake, alt: "Wedding Cake" },
  { src: birthdayCake, alt: "Birthday Cake" },
];

export const Features = () => {
  return (
    <section id="about" className="relative section-peach py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="relative">
            <Sparkle className="absolute -top-8 -left-4 sparkle hidden md:block" size={20} />
            <Sparkle className="absolute top-16 right-0 sparkle sparkle-delay-1 hidden md:block" size={16} />
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary mb-6">
              Best Choice for{" "}
              <span className="text-coral">Every Occasion</span>
            </h2>
            
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              At BakeJoy, we turn simple ingredients into delectable works of 
              edible art. Satisfy your cravings with our irresistible pastries and 
              baked goods, delivered fresh from the oven for you truly.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3">
              <button className="w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                +
              </button>
              {features.map((feature) => (
                <span
                  key={feature.label}
                  className={`feature-badge ${
                    feature.variant === "primary" 
                      ? "feature-badge-primary" 
                      : "feature-badge-outline"
                  }`}
                >
                  {feature.label}
                </span>
              ))}
            </div>
          </div>

          {/* Decorative Image Area */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-primary/10 rounded-full blur-3xl" />
            <div className="relative bg-background/50 rounded-3xl p-8 backdrop-blur-sm border border-border/50">
              <div className="grid grid-cols-2 gap-4">
                {cakeImages.map((cake, i) => (
                  <div 
                    key={i} 
                    className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    <img 
                      src={cake.src} 
                      alt={cake.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <WaveDividerAlt fillColor="hsl(var(--background))" className="absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default Features;
