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
        <h2 className="display text-[clamp(1.7rem,4.2vw,3rem)]">Get in touch</h2>
      </Reveal>

      <div className="scope-2 mt-10 sm:mt-14">
        <p className="measure text-[1.05rem] leading-[1.75] sm:text-[1.15rem]" style={{ color: "var(--ink-muted)" }}>
          Email is the fastest way to reach me. I usually reply within a day.
        </p>

        <dl className="mt-10 grid max-w-[38rem] gap-x-10 sm:mt-12 sm:grid-cols-2">
          {channels.map((channel) => (
            <Reveal key={channel.label} rule>
              <div className="py-5">
                <dt className="text-[0.82rem]" style={{ color: "var(--ink-faint)" }}>
                  {channel.label}
                </dt>
                <dd className="mt-1 text-[1.05rem] sm:text-[1.1rem]">
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
