'use client';

import { useRef } from 'react';

interface PostAuthorNoteInputProps {}

export default function PostAuthorNoteInput() {
  // const inputRef = useRef<HTMLInputElement>(null);

  // function handleInputWidth() {
  //   if (!inputRef.current) return;
  //   inputRef.current.style.width = inputRef.current.value.length - 16 + 'ch';
  // }

  return (
    <div className="flex items-center gap-4">
      <i className="bx bxs-quote-alt-left text-xl text-gray-400"></i>

      <textarea
        className="placeholder-gray-400 italic min-w-[444px] h-[26px] w-fit text-center resize-none"
        placeholder="Digite aqui alguma nota de autor de seu desejo (opcional)"
        maxLength={60}
      />

      <i className="bx bxs-quote-alt-right text-xl text-gray-400"></i>
    </div>
  );
}
