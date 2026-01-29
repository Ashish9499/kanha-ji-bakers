import { Sparkle } from "./Sparkle";
import { WaveDivider } from "./WaveDivider";

// Import blog images
import carrotCake from "@/assets/blog-carrot-cake.jpg";
import customCake from "@/assets/blog-custom-cake.jpg";
import celebration from "@/assets/blog-celebration.jpg";

const categories = ["Tips & Trick", "New Article", "Promotions"];

const articles = [
  {
    id: 1,
    title: "Our Favorite Cakes that Always Make It to The Best Seller",
    image: carrotCake,
    category: "Tips & Trick",
  },
  {
    id: 2,
    title: "Designing Your Own Customized Dream Birthday Cake",
    image: customCake,
    category: "New Article",
  },
  {
    id: 3,
    title: "Choosing the Right Cake for Any Occasion and Party: A Guide",
    image: celebration,
    category: "Promotions",
  },
];

export const CakeJournal = () => {
  return (
    <section id="journal" className="relative bg-mint py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 relative">
          <Sparkle className="absolute -top-4 right-1/3 sparkle hidden md:block" size={18} />
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary mb-6">
            Cake Journal
          </h2>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <article 
              key={article.id} 
              className="blog-card animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Article Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Article Content */}
              <div className="p-5">
                <span className="inline-block bg-secondary text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="font-bold text-foreground text-lg leading-tight mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <button className="text-coral font-semibold text-sm hover:underline underline-offset-4">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Wave Divider */}
      <WaveDivider fillColor="hsl(var(--peach))" className="absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default CakeJournal;
