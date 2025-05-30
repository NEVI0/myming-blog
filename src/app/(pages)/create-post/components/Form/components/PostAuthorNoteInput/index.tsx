'use client';

import { POST_VALIDATION } from '@domain/entities';

interface PostAuthorNoteInputProps {
  value: string | null;
  onChange: (value: string | null) => void;
}

export default function PostAuthorNoteInput({
  value,
  onChange,
}: PostAuthorNoteInputProps) {
  return (
    <div className="w-full md:w-auto flex items-center gap-2">
      <i className="bx bxs-quote-alt-left text-xl text-gray-400"></i>

      <textarea
        className="placeholder-gray-400 italic w-full md:min-w-[444px] md:h-[26px] text-center resize-none"
        placeholder="Digite aqui alguma nota de autor de seu desejo (opcional)"
        maxLength={POST_VALIDATION.MAX_AUTHOR_NOTE_LENGTH}
        value={value ?? ''}
        onChange={(event) => onChange(event.target.value)}
      />

      <i className="bx bxs-quote-alt-right text-xl text-gray-400"></i>
    </div>
  );
}
