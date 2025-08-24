export default function ButtonWithIcon({
  text,
  icon: Icon, // React Icon component
  iconPosition = "left", // "left" or "right"
  className = "",
  ...props
}) {
  return (
    <button
      className={`flex items-center gap-x-3  transition ${className}`}
      {...props}
    >
      {iconPosition === "left" && Icon && <Icon className="w-5 h-5" />}
      <span>{text}</span>
      {iconPosition === "right" && Icon && <Icon className="h-9" />}
    </button>
  );
}
