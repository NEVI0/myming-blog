import { VerticalDivider } from '@app/components/ui';

export default function Feedback() {
  return (
    <section className="flex items-center justify-center">
      <button className="flex items-center justify-center gap-3 font-medium h-[48px] px-8 hover:text-primary transition-colors">
        <i className="bx bx-dislike"></i>
        Não gostei
      </button>

      <VerticalDivider />

      <button className="flex items-center justify-center gap-3 font-medium h-[48px] px-8 hover:text-primary transition-colors">
        <i className="bx bx-like"></i>
        Gostei
      </button>
    </section>
  );
}
