import { concatClasses } from '@app/helpers';

export type ButtonVariant = 'primary' | 'default' | 'danger';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

const BUTTON_VARIANT: Record<ButtonVariant, string> = {
  primary: 'text-primary bg-primary/15 enabled:hover:bg-primary/25',
  default: 'text-gray-600 bg-gray-600/15 enabled:hover:bg-gray-600/25',
  danger: 'text-red-600 bg-red-600/15 enabled:hover:bg-red-600/25',
};

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={concatClasses(
        'h-[48px] px-6 rounded-xl font-medium whitespace-nowrap flex items-center justify-center transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
        BUTTON_VARIANT[variant],
        props.className
      )}
    >
      {children}
    </button>
  );
}
