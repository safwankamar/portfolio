import Reveal from "./Reveal";
import SkillGlobe from "./SkillGlobe";

const toolkit = [
  { name: "Python", use: "Back-end services, data work, and the ML pipelines" },
  { name: "Machine learning", use: "RAG, agents, fine-tuning, and NLP" },
  { name: "TypeScript", use: "Angular and React front ends" },
  { name: "C# / .NET", use: "APIs and internal business systems" },
  { name: "SQL", use: "Schema and queries on Postgres and SQL Server" },
  { name: "Bitcoin", use: "Lightning, Taproot, and Liquid" },
];

const alsoUses = [
  "Docker",
  "AWS",
  "REST",
  "WebSockets",
  "OAuth",
  "Git",
  "CI/CD",
  "Microservices",
];

const Skills = () => {
  return (
    <section id="toolkit" className="mx-auto max-w-[76rem] px-6 py-20 sm:px-10 sm:py-28">
      <Reveal>
        <h2 className="display text-[clamp(1.7rem,4.2vw,3rem)]">What I work with</h2>
      </Reveal>

      <div className="mt-12 grid items-center gap-10 sm:mt-16 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <SkillGlobe />
        </Reveal>

        <div>
          <dl>
            {toolkit.map((item) => (
              <Reveal key={item.name} rule>
                <div className="grid gap-0.5 py-4 sm:grid-cols-[minmax(0,9.5rem)_1fr] sm:gap-6 sm:py-[1.15rem]">
                  <dt className="text-[1rem] sm:text-[1.05rem]" style={{ fontWeight: 600 }}>
                    {item.name}
                  </dt>
                  <dd
                    className="text-[0.95rem] leading-[1.55]"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    {item.use}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal>
            <p
              className="mt-8 text-[0.92rem] leading-[1.7]"
              style={{ color: "var(--ink-faint)" }}
            >
              Day to day I also reach for {alsoUses.slice(0, -1).join(", ")}, and{" "}
              {alsoUses[alsoUses.length - 1]}.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;
