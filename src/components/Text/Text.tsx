type TextProps = {
  as?: 'p' | 'span';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
};

const styles = {
  sm: 'text-sm leading-6 text-text-muted',
  md: 'text-base leading-7 text-text-secondary',
  lg: 'text-lg leading-8 text-text-secondary',
};

export function Text({
  as = 'p',
  size = 'md',
  children,
  className = '',
}: TextProps) {
  const Component = as;

  return (
    <Component className={`${styles[size]} ${className}`}>{children}</Component>
  );
}
