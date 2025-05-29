import { POST } from '@app/constants/post';

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
      className="text-xl font-bold text-gray-600 placeholder-gray-400"
      placeholder="Digite o subtítulo do seu post (opcional)"
      value={value ?? ''}
      maxLength={POST.MAX_SUBTITLE_LENGTH}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
