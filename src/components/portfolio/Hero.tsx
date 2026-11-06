const Hero = () => {
  return (
    <section id="top" className="mx-auto max-w-[76rem] px-6 pb-24 pt-20 sm:px-10 sm:pb-36 sm:pt-32">
      <h1 className="display rise text-[clamp(1.55rem,6.6vw,4.9rem)]">
        <span className="block scope-1">I build web applications</span>
        <span className="block scope-2">and the machine learning</span>
        <span className="block scope-3">systems behind them.</span>
      </h1>

      <div className="scope-3 rise mt-12 sm:mt-20" style={{ animationDelay: "120ms" }}>
        <p className="measure text-[1.05rem] leading-[1.65] sm:text-[1.2rem]" style={{ color: "var(--ink-muted)" }}>
          I&rsquo;m Safwan Onakkal, a software developer in Dubai. Two years of
          production work in Python, .NET, and Angular, with most of my recent
          time spent on applied machine learning.
        </p>

        <p className="mt-8 text-[1.05rem] sm:text-[1.2rem]">
          <a className="link" href="mailto:safwankamar77@gmail.com">
            safwankamar77@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
