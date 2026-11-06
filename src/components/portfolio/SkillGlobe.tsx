import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { skillIcons } from "./skill-icons";
import { prefersReducedMotion } from "@/hooks/use-in-view";

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const BASE_SPIN = 0.0024;
const FRICTION = 0.94;

/** Even distribution over a sphere (Fibonacci lattice). */
const lattice = skillIcons.map((icon, i) => {
  const y = 1 - (i / (skillIcons.length - 1)) * 2;
  const radius = Math.sqrt(Math.max(0, 1 - y * y));
  const theta = i * GOLDEN_ANGLE;
  return { ...icon, x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius };
});

const SkillGlobe = () => {
  const { resolvedTheme } = useTheme();
  const onLight = resolvedTheme === "light";
  const hostRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const rotation = useRef({ yaw: 0.5, pitch: -0.22 });
  const velocity = useRef({ yaw: BASE_SPIN, pitch: 0 });
  const pointer = useRef<{ id: number; x: number; y: number } | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduced = prefersReducedMotion();
    if (reduced) velocity.current.yaw = 0;

    let frame = 0;

    const draw = () => {
      const size = host.clientWidth;
      const radius = size / 2 - size * 0.14;
      const { yaw, pitch } = rotation.current;
      const cosYaw = Math.cos(yaw);
      const sinYaw = Math.sin(yaw);
      const cosPitch = Math.cos(pitch);
      const sinPitch = Math.sin(pitch);

      lattice.forEach((point, i) => {
        const node = nodeRefs.current[i];
        if (!node) return;

        const x1 = point.x * cosYaw + point.z * sinYaw;
        const z1 = point.z * cosYaw - point.x * sinYaw;
        const y2 = point.y * cosPitch - z1 * sinPitch;
        const z2 = point.y * sinPitch + z1 * cosPitch;

        const depth = (z2 + 1) / 2;
        const scale = 0.62 + depth * 0.46;

        node.style.transform = `translate3d(${x1 * radius}px, ${y2 * radius}px, 0) translate(-50%, -50%) scale(${scale})`;
        node.style.opacity = String(0.3 + depth * 0.7);
        node.style.zIndex = String(Math.round(depth * 100));

        const caption = node.lastElementChild as HTMLElement | null;
        if (caption) {
          caption.style.opacity = String(Math.max(0, Math.min(1, (depth - 0.62) / 0.22)));
        }
      });
    };

    const tick = () => {
      if (!pointer.current) {
        rotation.current.yaw += velocity.current.yaw;
        rotation.current.pitch += velocity.current.pitch;

        velocity.current.yaw = velocity.current.yaw * FRICTION + BASE_SPIN * (1 - FRICTION) * (reduced ? 0 : 1);
        velocity.current.pitch *= FRICTION;

        // Keep the globe from tipping past its poles.
        rotation.current.pitch = Math.max(-0.62, Math.min(0.62, rotation.current.pitch));
      }
      draw();
      frame = requestAnimationFrame(tick);
    };

    const onPointerDown = (e: PointerEvent) => {
      pointer.current = { id: e.pointerId, x: e.clientX, y: e.clientY };
      host.setPointerCapture(e.pointerId);
      host.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      const p = pointer.current;
      if (!p || p.id !== e.pointerId) return;

      const dx = e.clientX - p.x;
      const dy = e.clientY - p.y;
      const yawStep = dx * 0.0062;
      const pitchStep = dy * 0.0042;

      rotation.current.yaw += yawStep;
      rotation.current.pitch = Math.max(-0.62, Math.min(0.62, rotation.current.pitch + pitchStep));
      velocity.current = { yaw: yawStep, pitch: pitchStep };

      pointer.current = { id: e.pointerId, x: e.clientX, y: e.clientY };
    };

    const endDrag = (e: PointerEvent) => {
      if (pointer.current?.id !== e.pointerId) return;
      pointer.current = null;
      host.style.cursor = "grab";
    };

    host.addEventListener("pointerdown", onPointerDown);
    host.addEventListener("pointermove", onPointerMove);
    host.addEventListener("pointerup", endDrag);
    host.addEventListener("pointercancel", endDrag);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      host.removeEventListener("pointerdown", onPointerDown);
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerup", endDrag);
      host.removeEventListener("pointercancel", endDrag);
    };
  }, []);

  return (
    <figure className="globe-figure">
      <div ref={hostRef} className="globe" aria-hidden="true">
        <svg className="globe-wire" viewBox="-100 -100 200 200" focusable="false">
          <circle r="72" />
          <ellipse cy="-48.2" rx="53.5" ry="9.1" />
          <ellipse cy="-25.8" rx="67.2" ry="11.4" />
          <ellipse cy="0.0" rx="72.0" ry="12.2" />
          <ellipse cy="25.8" rx="67.2" ry="11.4" />
          <ellipse cy="48.2" rx="53.5" ry="9.1" />
          <ellipse rx="62.4" ry="72" />
          <ellipse rx="36.0" ry="72" />
        </svg>

        {lattice.map((icon, i) => (
          <div
            key={icon.label}
            ref={(el) => (nodeRefs.current[i] = el)}
            className="globe-node"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill={onLight ? icon.onLight : icon.onDark} focusable="false">
              <path d={icon.path} />
            </svg>
            {!icon.wordmark && <span className="globe-label">{icon.label}</span>}
          </div>
        ))}
      </div>

      <figcaption className="globe-hint">Drag to spin</figcaption>
    </figure>
  );
};

export default SkillGlobe;
