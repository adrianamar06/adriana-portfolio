type SectionTitleProps = {
  number: string;
  title: string;
};

export default function SectionTitle({
  number,
  title,
}: SectionTitleProps) {
  return (
    <div className="mb-16 flex items-center gap-6">

      <span className="text-sm font-medium tracking-[0.4em] text-sky-400">
        {number}
      </span>

      <div className="h-px flex-1 bg-sky-200" />

      <h2 className="text-4xl font-bold text-slate-900">
        {title}
      </h2>

    </div>
  );
}