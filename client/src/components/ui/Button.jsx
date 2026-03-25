function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition";

  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800",
    secondary:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;