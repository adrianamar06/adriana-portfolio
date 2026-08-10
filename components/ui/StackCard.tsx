type Props = {
  title: string;
  items: string[];
};

export default function StackCard({ title, items }: Props) {
  return (
    <div className="group rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-2 hover:shadow-md">
      <h4 className="mb-4 text-sm font-semibold text-slate-700">{title}</h4>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it} className="flex items-center justify-between">
            <span className="text-sm text-slate-600">{it}</span>
            <span className="ml-3 inline-flex h-2 w-2 flex-none rounded-full bg-sky-300 opacity-90 group-hover:bg-sky-400" />
          </li>
        ))}
      </ul>
    </div>
  );
}
