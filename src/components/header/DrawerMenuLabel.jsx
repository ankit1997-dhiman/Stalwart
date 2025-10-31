import { Link } from "react-router-dom";

export const DrawerMenuLabel = ({ label, link }) => {
  return link ? (
    <Link to={link} className="font-monument px-0 text-[13px] menu-label">
      {label}
    </Link>
  ) : (
    <div className="font-monument px-0 text-[13px] menu-label">{label}</div>
  );
};
