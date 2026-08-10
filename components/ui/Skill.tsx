type Props = {
  children: React.ReactNode;
};

export default function Skill({ children }: Props) {
  return (
    <div className="rounded-full border border-sky-200 bg-sky-50 px-5 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-100">
      {children}
    </div>
  );
}