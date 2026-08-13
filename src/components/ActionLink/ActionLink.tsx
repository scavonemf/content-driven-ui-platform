import type { ReactNode } from 'react';

type ActionLinkProps = {
  href: string;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
};

const variantStyles = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  secondary:
    'border border-border bg-surface text-text-primary hover:bg-zinc-50',
} as const;

export function ActionLink({
  href,
  variant = 'primary',
  children,
}: ActionLinkProps) {
  return (
    <a
      href={href}
      className={[
        'inline-flex items-center rounded-lg px-5 py-3',
        'text-sm font-medium',
        'transition-colors',
        'focus-visible:outline-2',
        'focus-visible:outline-offset-2',
        'focus-visible:outline-blue-600',
        'motion-reduce:transition-none',
        variantStyles[variant],
      ].join(' ')}
    >
      {children}
    </a>
  );
}
