import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sparkle } from "./Sparkle";
import { WaveDivider } from "./WaveDivider";
import heroCroissant from "@/assets/hero-croissant.jpg";

const testimonials = [
  {
    text: "Kanha Bakers made my daughter's birthday special with a cake that tasted as good as it looked!",
    author: "Sarah Johnson",
  },
  {
    text: "Their chocolate cake is the best I have ever tasted in town. Keep up the amazing work!",
    author: "Mike Chen",
  },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-mint overflow-hidden pt-20">
      {/* Sparkle Decorations */}
      <Sparkle className="absolute top-32 right-[15%] sparkle hidden md:block" size={24} />
      <Sparkle className="absolute top-48 right-[25%] sparkle sparkle-delay-1 hidden md:block" size={18} />
      <Sparkle className="absolute top-64 left-[10%] sparkle sparkle-delay-2 hidden md:block" size={20} />
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Floating Testimonial - Desktop */}
            <div className="hidden lg:block testimonial-card max-w-xs mb-8 float animate-fade-in">
              <p className="text-sm text-foreground/80 mb-2">
                "{testimonials[0].text}"
              </p>
              <p className="text-coral font-semibold text-sm">
                {testimonials[0].author}
              </p>
            </div>

            {/* Hero Image on Mobile/Tablet - Centered */}
            <div className="lg:hidden relative mb-8 flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                <img
                  src={heroCroissant}
                  alt="Delicious chocolate croissant"
                  className="w-full h-full object-cover rounded-3xl shadow-elevated"
                />
                <Sparkle className="absolute -top-4 -right-4 sparkle" size={28} />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-4 animate-fade-in">
              Delight in{" "}
              <span className="text-coral">every bites!</span>
            </h1>
            
            <p className="text-foreground/70 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Experience the joy of perfectly baked cakes, made with love and 
              crafted to bring a smile to every celebration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button className="btn-primary-glow">
                View Menu
              </Button>
              <a
                href="https://wa.me/9728855586"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn justify-center"
              >
                <MessageCircle size={20} />
                Order on WhatsApp
              </a>
            </div>

            {/* Product Highlight */}
            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-2 text-foreground/60">
                <ChevronLeft size={20} className="cursor-pointer hover:text-primary transition-colors" />
                <span className="text-sm font-medium">Choco Croissant ( $0.65 )</span>
                <ChevronRight size={20} className="cursor-pointer hover:text-primary transition-colors" />
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image Desktop */}
          <div className="order-1 lg:order-2 hidden lg:flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-[400px] h-[400px] xl:w-[500px] xl:h-[500px]">
                <img
                  src={heroCroissant}
                  alt="Delicious chocolate croissant"
                  className="w-full h-full object-cover rounded-3xl shadow-elevated animate-scale-in"
                />
                
                {/* Sparkles around image */}
                <Sparkle className="absolute -top-6 right-10 sparkle" size={28} />
                <Sparkle className="absolute top-20 -right-6 sparkle sparkle-delay-1" size={22} />
              </div>

              {/* Second Testimonial */}
              <div className="testimonial-card max-w-xs absolute -bottom-4 -right-4 xl:-right-16 float float-delay-1 animate-slide-in-right" style={{ animationDelay: "0.5s" }}>
                <p className="text-sm text-foreground/80 mb-2">
                  "{testimonials[1].text}"
                </p>
                <p className="text-coral font-semibold text-sm">
                  {testimonials[1].author}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <WaveDivider fillColor="hsl(var(--peach))" className="absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default Hero;
