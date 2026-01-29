import { Sparkles } from "lucide-react";

interface SparkleProps {
  className?: string;
  size?: number;
}

export const Sparkle = ({ className = "", size = 24 }: SparkleProps) => (
  <Sparkles 
    className={`text-coral sparkle ${className}`} 
    size={size}
  />
);

export const SparkleDecoration = () => (
  <>
    <Sparkle className="absolute top-10 right-20 sparkle" size={20} />
    <Sparkle className="absolute top-32 right-40 sparkle sparkle-delay-1" size={16} />
    <Sparkle className="absolute bottom-20 left-16 sparkle sparkle-delay-2" size={18} />
  </>
);

export default Sparkle;
