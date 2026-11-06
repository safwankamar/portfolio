const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-[76rem] px-6 pb-16 pt-8 sm:px-10">
      <div
        className="rule-top flex flex-col gap-3 pt-8 text-[0.88rem] sm:flex-row sm:items-baseline sm:justify-between"
        style={{ color: "var(--ink-faint)" }}
      >
        <p>&copy; {year} Safwan Onakkal</p>
        <p>Dubai, United Arab Emirates</p>
      </div>
    </footer>
  );
};

export default Footer;
