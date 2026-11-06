const projects = [
  {
    title: "AI document analyzer",
    summary:
      "Extracts, categorises, and summarises information from unstructured documents. Built on an NLP pipeline with an LLM doing the final pass.",
    stack: ["Python", "NLP", "LLMs"],
  },
  {
    title: "Conversational AI platform",
    summary:
      "A chatbot platform teams can train on their own material. Handles multiple languages and plugs into existing business workflows.",
    stack: ["Python", "LLMs", "Angular", "SQL"],
  },
  {
    title: "Enterprise Angular dashboard",
    summary:
      "An operations dashboard with live data visualisation and role-based access, backed by a .NET API over SQL Server.",
    stack: ["Angular", "TypeScript", ".NET", "SQL"],
  },
  {
    title: "Lightning payment gateway",
    summary:
      "Payment gateway on the Bitcoin Lightning Network: invoice generation, payment verification, and a merchant dashboard.",
    stack: ["Python", ".NET", "Lightning"],
  },
  {
    title: "Taproot multisig wallet",
    summary:
      "A Bitcoin wallet using Taproot and Schnorr signatures to make multisignature spending cheaper and more private.",
    stack: ["TypeScript", "Node.js", "Bitcoin"],
  },
  {
    title: "Liquid asset manager",
    summary:
      "Issuance and transfer platform for digital securities and tokens on the Liquid Network.",
    stack: ["JavaScript", "Python", "Liquid"],
  },
];

const Projects = () => {
  return (
    <section id="work" className="mx-auto max-w-[76rem] px-6 py-20 sm:px-10 sm:py-28">
      <h2 className="display text-[clamp(1.7rem,4.2vw,3rem)]">Selected work</h2>

      <div className="scope-2 mt-12 sm:mt-16">
        {projects.map((project) => (
          <article key={project.title} className="rule-top py-8 sm:py-10">
            <h3 className="text-[1.3rem] sm:text-[1.6rem]" style={{ fontWeight: 600, letterSpacing: "-0.02em" }}>
              {project.title}
            </h3>
            <p className="measure mt-3 text-[0.98rem] leading-[1.7] sm:text-[1.05rem]" style={{ color: "var(--ink-muted)" }}>
              {project.summary}
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[0.88rem]" style={{ color: "var(--ink-faint)" }}>
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
