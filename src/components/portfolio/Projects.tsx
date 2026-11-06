import Reveal from "./Reveal";

type Project = {
  title: string;
  summary: string;
  stack: string[];
  repo?: string;
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
    title: "Tour booking assistant",
    summary:
      "A retrieval-augmented assistant for a Dubai tour operator that answers questions on packages, pricing and availability, then walks the customer through the booking itself. A supervisor agent routes each message to a water-activities, desert-activities or general specialist, each reading from its own vector store built from the operator's PDFs. Bookings run as a validated state machine rather than free-form chat, so a half-finished conversation cannot produce a half-finished booking.",
    stack: ["Python", "LangChain", "ChromaDB", "OpenAI", "Ollama"],
    note: "Private source",
  },
  {
    title: "Multimodal chat assistant",
    summary:
      "A chat application that accepts images alongside text, built as an Angular front end over a FastAPI service. Conversations persist and are summarised as they grow, each new summary folded into the previous one so a long thread stays inside the context window instead of being cut off at the front. Every exchange records its token count and the model that produced it, so the cost of a conversation is visible rather than guessed at.",
    stack: ["Angular", "TypeScript", "FastAPI", "Python", "OpenAI"],
    note: "Private source",
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
    title: "Fine-tuning and retrieval experiments",
    summary:
      "A run of training work done from the ground up rather than through an API: word2vec and LSTM language models, attention heads visualised to see what they actually attend to, and GPT-2 fine-tuned on a medical question-answer corpus both fully and with LoRA to compare cost against quality. The retrieval half ended in an agent that answers Angular questions from the documentation while carrying conversation memory and tracking its own token spend.",
    stack: ["PyTorch", "Transformers", "LoRA", "ChromaDB", "LangChain"],
    note: "Private source",
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

              {project.repo && (
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
              )}

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
