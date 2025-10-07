export const PropertyInfo = ({ label, value, Icon }) => (
  <div className="pb-15">
    <p className="leading-5 font-bold font-moderat-bold uppercase text-sm lg:text-base pb-2 lg:pb-5 ">{label}</p>
    <p className="leading-5  font-medium font-moderat-medium text-sm lg:text-base flex items-center gap-2">
      {value} {Icon && <Icon className="text-black" />}
    </p>
  </div>
);