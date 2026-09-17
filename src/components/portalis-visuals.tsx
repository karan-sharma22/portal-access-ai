import { Check, CircleAlert } from "lucide-react";

const activity = [
  ["08:32 AM", "TS09 AB 1234", "Resident", "Flat 402", "Entry Recorded"],
  ["08:41 AM", "TS10 XY 5678", "Visitor", "Flat 305", "Verification Required"],
  ["08:53 AM", "TS09 CD 7812", "Resident", "Flat 112", "Entry Recorded"],
  ["09:04 AM", "TS08 PQ 9123", "Unknown", "—", "Review Required"],
];

export function ProductVisual() {
  return (
    <figure>
      <figcaption className="mb-4 flex items-center justify-between text-xs text-muted-foreground"><span>Illustrative Portalis interface</span><span className="font-mono uppercase">Simulated data</span></figcaption>
      <div className="product-frame">
        <header className="flex flex-col gap-5 border-b border-interface-border px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="font-display text-sm font-semibold tracking-[0.2em]">PORTALIS</div>
          <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-widest text-interface-muted"><span className="status-dot" />Vehicle activity <span className="border-l border-interface-border pl-3">Today</span></div>
        </header>
        <div className="grid border-b border-interface-border sm:grid-cols-2 lg:grid-cols-4">
          {[["342","Vehicle Events"],["217","Unique Vehicles"],["31","Visitors"],["12","Review Required"]].map(([value,label], i) => (
            <div className="metric-cell" key={label}><span className={i === 3 ? "text-signal" : ""}>{value}</span><small>{label}</small></div>
          ))}
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-[760px]">
            <div className="activity-grid activity-head"><span>Time</span><span>Vehicle</span><span>Type</span><span>Association</span><span>Status</span></div>
            {activity.map((row, index) => (
              <div className="activity-grid activity-row" key={row[1]}>
                <span className="font-mono text-interface-muted">{row[0]}</span><strong>{row[1]}</strong><span>{row[2]}</span><span className="text-interface-muted">{row[3]}</span>
                <span className={index === 1 || index === 3 ? "status-review" : "status-clear"}>{index === 1 || index === 3 ? <CircleAlert /> : <Check />}{row[4]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-interface-border px-5 py-4 text-[0.65rem] uppercase tracking-widest text-interface-muted sm:px-8"><span>Gate 01 · Main Entrance</span><span>Illustrative only</span></div>
      </div>
    </figure>
  );
}

export function TechnicalGlyph({ type }: { type: number }) {
  return (
    <div className="tech-glyph" aria-hidden="true">
      <span className={`glyph-core glyph-${type}`} /><span className="glyph-line" /><span className="glyph-node" />
    </div>
  );
}