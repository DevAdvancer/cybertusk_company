export function SkylineSignal() {
  return (
    <span className="skyline-signal" aria-hidden="true">
      <span className="skyline-node" />
      <span className="skyline-trace"><span /></span>
      <span className="skyline-end" />
    </span>
  );
}

export function ServiceDiagram() {
  return (
    <div className="service-diagram" aria-hidden="true">
      <div className="diagram-network">
        <div className="diagram-branches">
          <span className="diagram-branch"><span /></span>
          <span className="diagram-branch"><span /></span>
          <span className="diagram-branch"><span /></span>
        </div>
        <div className="diagram-core">
          <img src="/brand/cybertusk-mark.svg" alt="" width="100" height="100" />
        </div>
        <span className="diagram-output"><span /></span>
      </div>
    </div>
  );
}
