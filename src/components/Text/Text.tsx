type TextProps = {
  as?: 'p' | 'span';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
};

const styles = {
  sm: 'text-sm leading-6 text-zinc-500',
  md: 'text-base leading-7 text-zinc-700',
  lg: 'text-lg leading-8 text-zinc-700',
};

export function Text({ as = 'p', size = 'md', children }: TextProps) {
  const Component = as;

  return <Component className={styles[size]}>{children}</Component>;
}
