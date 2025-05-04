import { Search } from 'lucide-react';

import { concatClasses } from '@app/helpers';

export default function SearchBox(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <div
      className={concatClasses(
        'h-[48px] px-6 rounded-xl font-medium whitespace-nowrap flex items-center gap-2 bg-gray-100',
        props.className
      )}
    >
      <input {...props} type="text" className="h-full w-full" />
      <Search className="text-primary" />
    </div>
  );
}
