import { Zap, Globe, Code2 } from "lucide-react";

const highlights = [
  { icon: Zap, text: "Bitcoin & Lightning Network Development" },
  { icon: Globe, text: "Full-Stack Web Applications" },
  { icon: Code2, text: "AI/ML Integration & Automation" },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 section-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-2 opacity-0 animate-fade-in">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Crafting Digital Solutions with Passion
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Content */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-6 text-muted-foreground text-center">
                <p className="text-lg leading-relaxed">
                  I'm <span className="text-foreground font-semibold">Safwan Onakkal</span>, a passionate Full-Stack Developer with <span className="text-foreground font-medium">2+ years of experience</span> in building robust web applications and blockchain solutions.
                </p>
                <p className="leading-relaxed">
                  My expertise spans across <span className="text-foreground font-medium">Python, Angular, .NET, and JavaScript/TypeScript</span> ecosystems. I specialize in Bitcoin development including <span className="text-foreground font-medium">Lightning Network, Taproot, and Liquid Network</span> implementations.
                </p>
                <p className="leading-relaxed">
                  With a strong foundation in <span className="text-foreground font-medium">AI and Machine Learning</span>, I create intelligent solutions that bridge the gap between cutting-edge technology and real-world applications.
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-10 grid sm:grid-cols-3 gap-4">
                {highlights.map((item) => (
                  <div 
                    key={item.text}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-material-sm hover:shadow-material transition-shadow text-center"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon size={24} className="text-primary" />
                    </div>
                    <span className="text-foreground font-medium text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;