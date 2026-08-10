export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[32px] border border-slate-200/60 bg-white/70 p-10 shadow-xl backdrop-blur-md">
      {children}
    </div>
  );
}