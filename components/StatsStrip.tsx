// components/StatsStrip.tsx
export default function StatsStrip({ items }: { items: { k: string; v: string }[] }) {
  if (!items?.length) return null;

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
      {items.map((s) => (
        <div key={s.v} className="rounded-2xl border border-white/10 p-4 bg-white/5">
          <div className="text-2xl font-semibold">{s.k}</div>
          <div className="text-sm text-white/70">{s.v}</div>
        </div>
      ))}
    </div>
  );
}
