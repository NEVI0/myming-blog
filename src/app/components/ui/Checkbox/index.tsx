import { Check } from 'lucide-react';
import { concatClasses } from '@app/helpers';

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onToggle: (checked: boolean) => void;
}

export default function Checkbox({
  id,
  label,
  checked,
  onToggle,
}: CheckboxProps) {
  return (
    <div className="flex items-center gap-4 cursor-pointer">
      <div
        onClick={() => onToggle(!checked)}
        className={concatClasses(
          'w-6 h-6 border border-gray-300 rounded-md flex items-center justify-center',
          checked && 'bg-primary border-primary text-white'
        )}
      >
        {checked && <Check className="w-4 h-4" />}
      </div>

      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(event) => onToggle(event.target.checked)}
        className="hidden"
      />

      <label htmlFor={id}>{label}</label>
    </div>
  );
}
