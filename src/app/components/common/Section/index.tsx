interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

export default function Section({
  id,
  title,
  children,
  actions,
}: SectionProps) {
  return (
    <section id={id} className="flex flex-col gap-8 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-left font-bold">{title}</h2>
        <>{actions}</>
      </div>

      {children}
    </section>
  );
}
