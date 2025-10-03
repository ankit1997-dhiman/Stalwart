export const PropertyInfo = ({ label, value, Icon }) => (
  <div className="pb-15">
    <p className="leading-5 font-moderat-bold uppercase text-base pb-5">{label}</p>
    <p className="leading-5 font-moderat-medium text-base flex items-center gap-2">
      {value} {Icon && <Icon className="text-black" />}
    </p>
  </div>
);