import { Code2, Database, Bitcoin, Brain, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend & Web",
    icon: Code2,
    color: "primary",
    skills: [
      { name: "Angular", level: 90 },
      { name: "JavaScript/jQuery", level: 92 },
      { name: "CSS/SCSS", level: 88 },
      { name: "TypeScript", level: 85 },
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    color: "accent",
    skills: [
      { name: "Python", level: 90 },
      { name: ".NET/C#", level: 88 },
      { name: "SQL/NoSQL", level: 92 },
      { name: "Git/DevOps", level: 95 },
    ],
  },
  {
    title: "Blockchain & Bitcoin",
    icon: Bitcoin,
    color: "warning",
    skills: [
      { name: "Bitcoin Core", level: 92 },
      { name: "Lightning Network", level: 88 },
      { name: "Taproot/Schnorr", level: 85 },
      { name: "Liquid Network", level: 82 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "success",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "NLP/Text Processing", level: 82 },
      { name: "AI Integration", level: 88 },
      { name: "LLMs & Prompting", level: 90 },
    ],
  },
];

const getColorClasses = (color: string) => {
  const colors = {
    primary: {
      bg: "bg-primary/10",
      border: "border-primary/20",
      text: "text-primary",
      bar: "bg-primary",
      glow: "shadow-[0_0_20px_hsl(var(--primary)/0.3)]",
    },
    accent: {
      bg: "bg-accent/10",
      border: "border-accent/20",
      text: "text-accent",
      bar: "bg-accent",
      glow: "shadow-[0_0_20px_hsl(var(--accent)/0.3)]",
    },
    warning: {
      bg: "bg-warning/10",
      border: "border-warning/20",
      text: "text-warning",
      bar: "bg-warning",
      glow: "shadow-[0_0_20px_hsl(var(--warning)/0.3)]",
    },
    success: {
      bg: "bg-success/10",
      border: "border-success/20",
      text: "text-success",
      bar: "bg-success",
      glow: "shadow-[0_0_20px_hsl(var(--success)/0.3)]",
    },
  };
  return colors[color as keyof typeof colors] || colors.primary;
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 opacity-0 animate-fade-in">
              <Sparkles size={20} className="text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Skills & Expertise
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Technologies I Work With
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A comprehensive toolkit spanning frontend, backend, blockchain, and AI technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const colors = getColorClasses(category.color);
              return (
                <div
                  key={category.title}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8 opacity-0 animate-fade-in shadow-material hover:shadow-material-lg transition-all duration-300"
                  style={{ animationDelay: `${0.2 + categoryIndex * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center ${colors.glow}`}>
                      <category.icon size={24} className={colors.text} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className={`text-sm font-semibold ${colors.text}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                          <div
                            className={`h-full ${colors.bar} rounded-full skill-bar`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${0.5 + categoryIndex * 0.2 + skillIndex * 0.1}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <p className="text-center text-sm text-muted-foreground mb-4">Also experienced with:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["REST APIs", "GraphQL", "Docker", "AWS", "CI/CD", "Agile", "TDD", "Microservices", "WebSockets", "OAuth"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-full border border-border hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;