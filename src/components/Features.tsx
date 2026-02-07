import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Award, Palette, Truck, DollarSign, Heart } from "lucide-react";
import { Sparkle } from "./Sparkle";
import { WaveDividerAlt } from "./WaveDivider";

// Lazy load images
const LazyImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      )}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl" />
      )}
    </div>
  );
};

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={`relative bg-gradient-to-br from-peach via-secondary to-peach py-12 md:py-20 lg:py-28 transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="relative order-2 lg:order-1 px-2 sm:px-4">
            <Sparkle className="absolute -top-6 -left-2 sparkle hidden md:block" size={18} />
            <Sparkle className="absolute top-12 right-0 sparkle sparkle-delay-1 hidden md:block" size={14} />
            
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary mb-4 sm:mb-6 md:mb-8 text-center lg:text-left">
              Best Choice for{" "}
              <span className="text-coral relative inline-block">
                Every Occasion
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-coral/30" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0 4 Q 25 0, 50 4 T 100 4" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </h2>
            
            <p className="text-foreground/80 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 md:mb-10 text-center lg:text-left max-w-md sm:max-w-lg mx-auto lg:mx-0">
              At Kanha Bakery, we turn simple ingredients into delectable works of 
              edible art. Satisfy your cravings with our irresistible pastries and 
              baked goods, delivered fresh from oven for you truly.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
              <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-coral flex items-center justify-center text-white shadow-lg hover:scale-105 transition-all duration-300 touch-target active:scale-95">
                <span className="text-sm sm:text-base md:text-lg font-bold">+</span>
              </button>
              {features.map((feature) => (
                <span
                  key={feature.label}
                  className={`feature-badge text-xs sm:text-sm md:text-base px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 ${
                    feature.variant === "primary" 
                      ? "feature-badge-primary" 
                      : "feature-badge-outline"
                  }`}
                >
                  <span className="truncate max-w-24 sm:max-w-none font-medium">{feature.label}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Image Area - Responsive Grid */}
          <div className="relative order-1 lg:order-2">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-coral/15 to-primary/10 rounded-full blur-3xl animate-pulse"></div>
            
            {/* Mobile Grid - 2x2 */}
            <div className="lg:hidden">
              <div className="relative glass rounded-3xl p-4 sm:p-6 border border-border/30">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {cakeImages.map((cake, i) => (
                    <LazyImage 
                      key={i} 
                      src={cake.src} 
                      alt={cake.alt}
                      className="aspect-square rounded-2xl overflow-hidden shadow-lg card-3d"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:block">
              <div className="relative glass rounded-3xl p-6 sm:p-8 border border-border/30 perspective-container">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {cakeImages.map((cake, i) => (
                    <LazyImage 
                      key={i} 
                      src={cake.src} 
                      alt={cake.alt}
                      className="aspect-square rounded-2xl overflow-hidden shadow-lg card-3d"
                    />
                  ))}
                </div>
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
