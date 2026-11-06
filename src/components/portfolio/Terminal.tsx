import { useEffect, useRef, useState } from "react";
import { useInView, prefersReducedMotion } from "@/hooks/use-in-view";

type Line = { kind: "input" | "output" | "note"; text: string };

const script: Line[] = [
  { kind: "input", text: "python3" },
  { kind: "note", text: "Python 3.12.2" },
  { kind: "input", text: "import safwan" },
  { kind: "input", text: "safwan.stack" },
  { kind: "output", text: "['Python', 'TypeScript', 'C#/.NET', 'SQL']" },
  { kind: "input", text: "safwan.focus" },
  { kind: "output", text: "'applied machine learning'" },
  { kind: "input", text: "safwan.also" },
  { kind: "output", text: "['bitcoin', 'lightning', 'taproot']" },
  { kind: "input", text: "safwan.available" },
  { kind: "output", text: "True" },
];

const TYPE_MS = 34;
const PAUSE_MS = 360;

const prompt = (kind: Line["kind"], index: number) => {
  if (kind !== "input") return "";
  return index === 0 ? "$ " : ">>> ";
};

const Terminal = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [visible, setVisible] = useState(0);
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (!inView) return;

    if (prefersReducedMotion()) {
      setVisible(script.length);
      setDone(true);
      return;
    }

    let cancelled = false;
    let lineIndex = 0;

    const runLine = () => {
      if (cancelled || lineIndex >= script.length) {
        if (!cancelled) setDone(true);
        return;
      }

      const line = script[lineIndex];

      if (line.kind !== "input") {
        setVisible(lineIndex + 1);
        lineIndex += 1;
        timers.current.push(window.setTimeout(runLine, PAUSE_MS));
        return;
      }

      let charIndex = 0;
      const typeChar = () => {
        if (cancelled) return;
        charIndex += 1;
        setTyped(line.text.slice(0, charIndex));

        if (charIndex < line.text.length) {
          timers.current.push(window.setTimeout(typeChar, TYPE_MS));
        } else {
          timers.current.push(
            window.setTimeout(() => {
              if (cancelled) return;
              setVisible(lineIndex + 1);
              setTyped("");
              lineIndex += 1;
              runLine();
            }, PAUSE_MS)
          );
        }
      };
      typeChar();
    };

    timers.current.push(window.setTimeout(runLine, 500));

    return () => {
      cancelled = true;
      timers.current.forEach((id) => window.clearTimeout(id));
      timers.current = [];
    };
  }, [inView]);

  const typingLine = !done && visible < script.length ? script[visible] : null;

  return (
    <div
      ref={ref}
      className="terminal"
      role="img"
      aria-label="A Python session listing Safwan's stack: Python, TypeScript, C# and .NET, SQL; focus on applied machine learning; also bitcoin, lightning and taproot; available for work."
    >
      <div className="terminal-bar" aria-hidden="true">
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-title">safwan — python3</span>
      </div>

      <pre className="terminal-body" aria-hidden="true">
        {script.slice(0, visible).map((line, i) => (
          <div key={`${line.text}-${i}`} className={`t-line t-${line.kind}`}>
            <span className="t-prompt">{prompt(line.kind, i)}</span>
            {line.text}
          </div>
        ))}

        {typingLine && typingLine.kind === "input" && (
          <div className="t-line t-input">
            <span className="t-prompt">{prompt(typingLine.kind, visible)}</span>
            {typed}
            <span className="t-cursor" />
          </div>
        )}

        {done && (
          <div className="t-line t-input">
            <span className="t-prompt">&gt;&gt;&gt; </span>
            <span className="t-cursor" />
          </div>
        )}
      </pre>
    </div>
  );
};

export default Terminal;
