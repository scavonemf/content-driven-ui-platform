type TitleProps = {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
};

const sizeStyles = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-semibold",
};

export const Title = ({ as = "h1", children }: TitleProps) => {

    const Component = as ;

    return (
        <Component className={sizeStyles[as]}>
            {children}
        </Component>
    )
}
