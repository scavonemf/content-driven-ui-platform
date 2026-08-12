type TextProps = {
    as?: "p" | "span";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
};

const sizeStyles = {
  sm: 'font-size: 0.875rem; line-height: 1.25rem;',
  md: 'font-size: 1rem; line-height: 1.5rem;',
  lg: 'font-size: 1.125rem; line-height: 1.75rem;',
};

export const Text = ({ as = "p", size = "md", children }: TextProps) => {

    const Component = as;

    return (
        <Component className={sizeStyles[size]}>
            {children}
        </Component>
    )
}
