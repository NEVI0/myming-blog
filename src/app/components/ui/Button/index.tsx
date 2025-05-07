import { concatClasses } from '@app/helpers';

type ButtonVariant = 'primary' | 'default' | 'danger';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

const BUTTON_VARIANT: Record<ButtonVariant, string> = {
  primary: 'text-primary bg-primary/15 hover:bg-primary/25',
  default: 'text-text-light bg-text-light/15 hover:bg-text-light/25',
  danger: 'text-red-600 bg-red-600/15 hover:bg-red-600/25',
};

export default function Button({
  children,
  variant = 'primary',
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={concatClasses(
        'h-[48px] px-6 rounded-xl font-medium whitespace-nowrap flex items-center justify-center transition-colors',
        BUTTON_VARIANT[variant],
        props.className
      )}
    >
      {children}
    </button>
  );
}
