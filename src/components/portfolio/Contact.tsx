const channels = [
  { label: "Email", value: "safwankamar77@gmail.com", href: "mailto:safwankamar77@gmail.com" },
  { label: "Phone", value: "+971 56 325 7086", href: "tel:+971563257086" },
  { label: "LinkedIn", value: "in/safwanonakkal", href: "https://www.linkedin.com/in/safwanonakkal" },
  { label: "GitHub", value: "safwankamar", href: "https://github.com/safwankamar" },
];

import Reveal from "./Reveal";

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-[76rem] px-6 py-20 sm:px-10 sm:py-28">
      <Reveal>
        <h2 className="display text-[clamp(1.7rem,4.2vw,3rem)]">
          <span className="status-dot" aria-hidden="true" />
          Open to new work
        </h2>
      </Reveal>

      <div className="scope-2 mt-12 sm:mt-16">
        <p className="measure text-[1.05rem] leading-[1.75] sm:text-[1.15rem]" style={{ color: "var(--ink-muted)" }}>
          I&rsquo;m taking on freelance projects and talking to teams hiring
          full time. Email is the fastest way to reach me &mdash; I reply within
          a day.
        </p>

        <dl className="mt-12 sm:mt-14">
          {channels.map((channel) => (
            <Reveal key={channel.label} rule>
              <div className="grid gap-1 py-5 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-10">
              <dt className="text-[0.88rem]" style={{ color: "var(--ink-faint)" }}>
                {channel.label}
              </dt>
              <dd className="text-[1.05rem] sm:text-[1.2rem]">
                <a
                  className="link"
                  href={channel.href}
                  {...(channel.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {channel.value}
                </a>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Contact;
