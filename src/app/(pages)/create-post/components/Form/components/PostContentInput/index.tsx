'use client';

import { useRef } from 'react';
import { POST_VALIDATION } from '@domain/entities';

interface PostContentInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PostContentInput({
  value,
  onChange,
}: PostContentInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleTextareaHeight() {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
  }

  const isValid = value.length >= POST_VALIDATION.MIN_CONTENT_LENGTH;

  return (
    <div className="w-full flex flex-col gap-4">
      <textarea
        ref={textareaRef}
        onKeyUp={handleTextareaHeight}
        className="placeholder-gray-400 min-h-[252px] resize-none overflow-hidden"
        placeholder="Digite aqui o conteúdo do seu post..."
        value={value}
        minLength={POST_VALIDATION.MIN_CONTENT_LENGTH}
        onChange={(event) => onChange(event.target.value)}
      />

      <small className="text-sm text-gray-600">
        {isValid
          ? 'Quantidade mínima de caracteres atingida!'
          : `Aumente seu conteúdo para ${POST_VALIDATION.MIN_CONTENT_LENGTH} caracteres. No momento tem ${value.length} caracteres.`}
      </small>
    </div>
  );
}
