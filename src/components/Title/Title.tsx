type TitleProps = {
  as?: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const styles = {
  h1: 'text-4xl font-bold tracking-tight text-text-primary',
  h2: 'text-3xl font-bold tracking-tight text-text-primary',
  h3: 'text-xl font-semibold text-text-primary',
};

export function Title({ as = 'h1', children, className = '', id }: TitleProps) {
  const Component = as;

  return (
    <Component id={id} className={`${styles[as]} ${className}`}>
      {children}
    </Component>
  );
}
