import Terminal from "./Terminal";

const lines = [
  { text: "I build web applications", scope: "scope-1" },
  { text: "and the machine learning", scope: "scope-2" },
  { text: "systems behind them.", scope: "scope-3" },
];

const Hero = () => {
  return (
    <section id="top" className="mx-auto max-w-[76rem] px-6 pb-20 pt-16 sm:px-10 sm:pb-28 sm:pt-24">
      <h1 className="display text-[clamp(1.55rem,6.6vw,4.9rem)]">
        {lines.map((line, i) => (
          <span
            key={line.text}
            className={`rise block ${line.scope}`}
            style={{ animationDelay: `${i * 110}ms` }}
          >
            {line.text}
          </span>
        ))}
      </h1>

      <div className="scope-2 mt-14 grid gap-12 sm:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:items-start lg:gap-16">
        <div className="rise" style={{ animationDelay: "380ms" }}>
          <p className="measure text-[1.05rem] leading-[1.7] sm:text-[1.15rem]" style={{ color: "var(--ink-muted)" }}>
            I&rsquo;m Safwan Onakkal, a software developer in Dubai. I&rsquo;ve been
            shipping production software since 2023 in Python, .NET, and
            Angular, with most of my recent time spent on applied machine
            learning.
          </p>

          <p className="mt-8 text-[1.05rem] sm:text-[1.15rem]">
            <a className="link" href="mailto:safwankamar77@gmail.com">
              safwankamar77@gmail.com
            </a>
          </p>
        </div>

        <div className="rise" style={{ animationDelay: "520ms" }}>
          <Terminal />
        </div>
      </div>
    </section>
  );
};

export default Hero;
