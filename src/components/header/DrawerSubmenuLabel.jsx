import { Link } from "react-router-dom";

export const DrawerSubmenuLabel = ({ label, link }) => {
  return (
    <Link
      to={link ? link : "#"}
      className="font-monument  px-0 uppercase text-[11px]"
    >
      {label}
    </Link>
  );
};
