const About = () => {
  return (
    <section id="about" className="mx-auto max-w-[76rem] px-6 py-20 sm:px-10 sm:py-28">
      <h2 className="display text-[clamp(1.7rem,4.2vw,3rem)]">About</h2>

      <div className="scope-2 mt-12 space-y-6 sm:mt-16">
        <p className="measure text-[1.05rem] leading-[1.75] sm:text-[1.15rem]">
          I started out building business software in .NET and Angular, and kept
          drifting toward the parts of the stack where the hard problems were.
          These days that means Python services and machine learning.
        </p>
        <p className="measure text-[1.05rem] leading-[1.75]" style={{ color: "var(--ink-muted)" }}>
          Most of my work sits between a model and the people who need to use
          it: cleaning up the data going in, making the output reliable enough
          to ship, and wrapping it in an interface someone can actually operate.
        </p>
        <p className="measure text-[1.05rem] leading-[1.75]" style={{ color: "var(--ink-muted)" }}>
          I also spend time on Bitcoin protocol work. It is where I learned to
          be careful: in that world a bug is not a ticket, it is someone&rsquo;s
          money.
        </p>
        <p className="measure text-[1.05rem] leading-[1.75]" style={{ color: "var(--ink-muted)" }}>
          I&rsquo;m from Kerala and based in Dubai.
        </p>
      </div>
    </section>
  );
};

export default About;
