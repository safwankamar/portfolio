import { ExternalLink, Github, Sparkles, Bitcoin, Brain, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Lightning Payment Gateway",
    description:
      "A robust payment gateway integrating Bitcoin Lightning Network for instant, low-fee transactions. Features include invoice generation, payment verification, and merchant dashboard.",
    image: "/placeholder.svg",
    tags: ["Bitcoin", "Lightning", "Python", ".NET"],
    category: "Blockchain",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI-Powered Document Analyzer",
    description:
      "Machine learning application that extracts, categorizes, and summarizes information from documents using NLP techniques and LLM integration.",
    image: "/placeholder.svg",
    tags: ["Python", "ML", "NLP", "OpenAI"],
    category: "AI/ML",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Enterprise Angular Dashboard",
    description:
      "Full-featured enterprise dashboard built with Angular, featuring real-time data visualization, role-based access control, and responsive design.",
    image: "/placeholder.svg",
    tags: ["Angular", "TypeScript", ".NET", "SQL"],
    category: "Full-Stack",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Liquid Network Asset Manager",
    description:
      "Asset issuance and management platform built on Liquid Network, enabling creation and transfer of digital securities and tokens.",
    image: "/placeholder.svg",
    tags: ["Liquid", "Bitcoin", "JavaScript", "Python"],
    category: "Blockchain",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Taproot Multisig Wallet",
    description:
      "Advanced Bitcoin wallet implementing Taproot and Schnorr signatures for enhanced privacy and efficiency in multisignature transactions.",
    image: "/placeholder.svg",
    tags: ["Taproot", "Bitcoin", "TypeScript", "Node.js"],
    category: "Blockchain",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Intelligent Chatbot Platform",
    description:
      "Conversational AI platform with custom training capabilities, multi-language support, and seamless integration with business workflows.",
    image: "/placeholder.svg",
    tags: ["LLM", "Python", "Angular", "SQL"],
    category: "AI/ML",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Blockchain":
      return Bitcoin;
    case "AI/ML":
      return Brain;
    default:
      return Code2;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Blockchain":
      return "bg-warning/10 text-warning border-warning/20";
    case "AI/ML":
      return "bg-success/10 text-success border-success/20";
    default:
      return "bg-primary/10 text-primary border-primary/20";
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 section-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 opacity-0 animate-fade-in">
              <Sparkles size={20} className="text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Featured Work
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Projects I've Built
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A collection of blockchain, AI, and full-stack projects showcasing innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <div
                  key={project.title}
                  className="group bg-card border border-border rounded-2xl overflow-hidden opacity-0 animate-scale-in shadow-material hover:shadow-material-xl transition-all duration-300"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="aspect-video bg-secondary overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full border ${getCategoryColor(project.category)}`}>
                      <CategoryIcon size={14} />
                      <span className="text-xs font-medium">{project.category}</span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3">
                      <Button asChild size="sm" className="flex-1 shadow-material-sm hover:shadow-material">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          View Project
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View GitHub repository">
                          <Github size={18} />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;