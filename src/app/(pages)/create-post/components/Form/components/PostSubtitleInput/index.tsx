interface PostSubtitleInputProps {
  value: string | null;
  onChange: (value: string | null) => void;
}

export default function PostSubtitleInput({
  value,
  onChange,
}: PostSubtitleInputProps) {
  return (
    <input
      type="text"
      className="text-xl font-bold placeholder-gray-400"
      placeholder="Digite o subtítulo do seu post (opcional)"
      value={value ?? ''}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
