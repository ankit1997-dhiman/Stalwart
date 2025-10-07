


export default function ButtonWithIcon({
  text,
  iconImage,
  iconPosition = "left", // "left" or "right"
  className = "",
  ...props
}) {
  return (
    <p
      className={`flex items-center gap-x-3  transition ${className}`}
      {...props}
    >
      {iconPosition === "left" && Icon && <Icon className="w-5 h-2" />}
      <span className="text-xs md:text-sm">{text}</span>
      {iconPosition === "right" && <img src={iconImage} className="" />}
    </p>
  );
}
