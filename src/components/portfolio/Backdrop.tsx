/**
 * A fixed layer behind everything: indent guides echoing the page's scope
 * structure, and one slow drifting glow. Inert — it never takes a pointer
 * event and never sits above content.
 */
const Backdrop = () => (
  <div className="backdrop" aria-hidden="true">
    <div className="backdrop-glow" />
    <div className="backdrop-guides">
      <span className="guide guide-1" />
      <span className="guide guide-2" />
      <span className="guide guide-3" />
    </div>
  </div>
);

export default Backdrop;
