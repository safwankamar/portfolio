import Reveal from "./Reveal";

type Project = {
  title: string;
  summary: string;
  stack: string[];
  repo: string;
  note?: string;
};

const projects: Project[] = [
  {
    title: "Cortex",
    summary:
      "A codebase assistant that answers questions about your own repository and runs entirely on your machine. It pairs retrieval over the source with symbolic analysis from a language server, so answers point at real definitions rather than plausible-looking ones. Specialised agents split the work between planning, exploring and answering, and SHA-256 hashing means only the files you touched get re-indexed.",
    stack: ["Python", "LangChain", "Ollama", "RAG", "Jedi LSP"],
    repo: "safwankamar/cortex",
  },
  {
    title: "AI Resume Tailor",
    summary:
      "A service that reads a resume out of a PDF or Word file, compares it against a job description, and rewrites it for relevance and ATS parsing. Built as a FastAPI backend so it can sit behind any front end.",
    stack: ["Python", "FastAPI", "OpenAI API", "PyPDF2"],
    repo: "safwankamar/ai-resume-tailor",
    note: "In progress",
  },
  {
    title: "NWC Polar Bridge",
    summary:
      "A Nostr Wallet Connect bridge that lets a Nostr client drive an LND node over NIP-47 — paying and creating invoices, reading balances, and streaming payment notifications back. It tracks HODL invoices through their intermediate states, which most bridges skip, and can front several nodes at once.",
    stack: ["Python", "LND", "Nostr", "NIP-47", "Lightning"],
    repo: "safwankamar/nwc_bridge_polar",
  },
];

const Projects = () => {
  return (
    <section id="work" className="mx-auto max-w-[76rem] px-6 py-20 sm:px-10 sm:py-28">
      <Reveal>
        <h2 className="display text-[clamp(1.7rem,4.2vw,3rem)]">Selected work</h2>
      </Reveal>

      <div className="scope-2 mt-12 sm:mt-16">
        {projects.map((project) => (
          <Reveal key={project.title} rule>
            <article className="py-8 sm:py-10">
              <h3
                className="text-[1.3rem] sm:text-[1.6rem]"
                style={{ fontWeight: 600, letterSpacing: "-0.02em" }}
              >
                {project.title}
                {project.note && (
                  <span
                    className="ml-3 align-middle text-[0.78rem]"
                    style={{ color: "var(--ink-faint)", fontWeight: 400, letterSpacing: 0 }}
                  >
                    {project.note}
                  </span>
                )}
              </h3>

              <p
                className="measure mt-3 text-[0.98rem] leading-[1.7] sm:text-[1.05rem]"
                style={{ color: "var(--ink-muted)" }}
              >
                {project.summary}
              </p>

              <p className="mt-4 text-[0.92rem]">
                <a
                  className="link"
                  href={`https://github.com/${project.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/{project.repo}
                </a>
              </p>

              <ul
                className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[0.88rem]"
                style={{ color: "var(--ink-faint)" }}
              >
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
