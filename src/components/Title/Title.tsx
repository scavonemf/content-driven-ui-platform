type TitleProps = {
  as?: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
};

const styles = {
  h1: 'text-4xl font-bold tracking-tight text-zinc-900',
  h2: 'text-3xl font-bold tracking-tight text-zinc-900',
  h3: 'text-xl font-semibold text-zinc-900',
};

export function Title({ as = 'h1', children }: TitleProps) {
  const Component = as;

  return <Component className={styles[as]}>{children}</Component>;
}
