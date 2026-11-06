const toolkit = [
  { name: "Python", use: "Back-end services, data work, and the ML pipelines" },
  { name: "Machine learning", use: "NLP, text extraction, and LLM integration" },
  { name: "TypeScript", use: "Angular and React front ends" },
  { name: "C# / .NET", use: "APIs and internal business systems" },
  { name: "SQL", use: "Schema design and queries on Postgres and SQL Server" },
  { name: "Bitcoin", use: "Lightning, Taproot, and Liquid implementations" },
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
      <h2 className="display text-[clamp(1.7rem,4.2vw,3rem)]">What I work with</h2>

      <dl className="scope-2 mt-12 sm:mt-16">
        {toolkit.map((item) => (
          <div
            key={item.name}
            className="rule-top grid gap-1 py-5 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-10 sm:py-6"
          >
            <dt className="text-[1.05rem] sm:text-[1.15rem]" style={{ fontWeight: 600 }}>
              {item.name}
            </dt>
            <dd className="measure text-[0.98rem] leading-[1.6] sm:text-[1.05rem]" style={{ color: "var(--ink-muted)" }}>
              {item.use}
            </dd>
          </div>
        ))}
      </dl>

      <p className="scope-2 measure mt-10 text-[0.95rem] leading-[1.7]" style={{ color: "var(--ink-faint)" }}>
        Day to day I also reach for {alsoUses.slice(0, -1).join(", ")}, and{" "}
        {alsoUses[alsoUses.length - 1]}.
      </p>
    </section>
  );
};

export default Skills;
