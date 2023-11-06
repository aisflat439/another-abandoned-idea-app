type Type = "submit" | "button" | "reset";

const sizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-md",
  lg: "px-6 py-3 text-lg",
};

const variants = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-white text-blue-500",
};

export const Button = ({
  children,
  size,
  type,
  variant,
}: {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  type?: Type;
  variant?: "primary" | "secondary";
}) => {
  const s = size || "md";
  const v = variant || "primary";

  const className = `${sizes[s]} ${variants[v]}`;

  return (
    <button type={type || "submit"} className={className}>
      {children}
    </button>
  );
};
