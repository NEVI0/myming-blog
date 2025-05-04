'use client';

import { useRef } from 'react';

interface PostContentInputProps {}

export default function PostContentInput() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleTextareaHeight() {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
  }

  return (
    <textarea
      ref={textareaRef}
      onKeyUp={handleTextareaHeight}
      className="placeholder-gray-400 min-h-[252px] resize-none overflow-hidden"
      placeholder="Digite aqui o conteúdo do seu post, você pode adicionar textos em negrito, itálico e outras formatações nos botões fixados na parte inferior da tela"
    />
  );
}
