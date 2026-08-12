type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

const variantStyles = {
  primary:
    "block w-fit mt-5 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600",
  secondary:
    "block w-fit mt-5 border border-zinc-300 text-zinc-900 py-2 px-4 rounded-md hover:bg-zinc-100",
};

export const ActionLink = ({ href, children, variant ='primary' }: ActionLinkProps) => (
  <a href={href} className={variantStyles[variant]}>
    {children}
  </a>
);