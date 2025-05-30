import { POST_VALIDATION } from '@domain/entities';

interface PostTitleInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PostTitleInput({
  value,
  onChange,
}: PostTitleInputProps) {
  return (
    <input
      type="text"
      className="text-2xl font-bold placeholder-gray-400"
      placeholder="Digite o título do seu post"
      value={value}
      maxLength={POST_VALIDATION.MAX_TITLE_LENGTH}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
