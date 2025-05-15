'use client';

interface PostAuthorNoteInputProps {
  value: string | null;
  onChange: (value: string | null) => void;
}

export default function PostAuthorNoteInput({
  value,
  onChange,
}: PostAuthorNoteInputProps) {
  return (
    <div className="flex items-center gap-4">
      <i className="bx bxs-quote-alt-left text-xl text-gray-400"></i>

      <textarea
        className="placeholder-gray-400 italic min-w-[444px] h-[26px] w-fit text-center resize-none"
        placeholder="Digite aqui alguma nota de autor de seu desejo (opcional)"
        maxLength={60}
        value={value ?? ''}
        onChange={(event) => onChange(event.target.value)}
      />

      <i className="bx bxs-quote-alt-right text-xl text-gray-400"></i>
    </div>
  );
}
