export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none";

  const variants = {
    primary: "bg-accent text-primary hover:bg-accentMuted",
    secondary: "border border-accent text-accent hover:bg-accent hover:text-primary",
    dark: "bg-primary text-white hover:bg-secondary",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
