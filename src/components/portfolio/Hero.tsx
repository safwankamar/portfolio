import { ArrowDown, Github, Linkedin, Mail, Bitcoin, Brain, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const techIcons = [
  { icon: Bitcoin, label: "Bitcoin", delay: "0s" },
  { icon: Brain, label: "AI/ML", delay: "2s" },
  { icon: Code2, label: "Full-Stack", delay: "4s" },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-6 pt-20 pb-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Available for Projects
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 opacity-0 animate-fade-in leading-tight"
            style={{ animationDelay: "0.1s" }}
          >
            Hi, I'm{" "}
            <span className="text-gradient">Safwan Onakkal</span>
          </h1>

          <h2
            className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Full-Stack Developer | Blockchain Expert | AI Enthusiast
          </h2>

          <p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            Specializing in <span className="text-foreground font-medium">Python, Angular, .NET, and Bitcoin/Lightning Network</span> development. 
            Building innovative solutions at the intersection of blockchain technology and artificial intelligence.
          </p>

          {/* Floating tech icons */}
          <div className="flex justify-center gap-4 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.35s" }}>
            {techIcons.map((tech) => (
              <div
                key={tech.label}
                className="w-14 h-14 rounded-2xl bg-card border border-border shadow-material flex items-center justify-center hover:shadow-material-lg transition-shadow"
              >
                <tech.icon size={24} className="text-primary" />
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button asChild size="lg" className="w-full sm:w-auto shadow-material hover:shadow-material-lg transition-shadow">
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a href="#contact">
                <Mail size={18} className="mr-2" />
                Get In Touch
              </a>
            </Button>
          </div>

          <div
            className="flex items-center justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-material-sm hover:shadow-material"
              aria-label="GitHub"
            >
              <Github size={20} className="text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/safwanonakkal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-material-sm hover:shadow-material"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-foreground" />
            </a>
            <a
              href="mailto:safwankamar77@gmail.com"
              className="p-3 rounded-xl bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-material-sm hover:shadow-material"
              aria-label="Email"
            >
              <Mail size={20} className="text-foreground" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce-subtle">
        <a href="#about" aria-label="Scroll to about section" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm font-medium">Scroll</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;