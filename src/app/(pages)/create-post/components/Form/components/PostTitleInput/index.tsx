import { POST } from '@app/constants/post';

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
      maxLength={POST.MAX_TITLE_LENGTH}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
