import image from "@/assets/images/request.png";
import ButtonWithIcon from "@/common/Button/ButtonWithIcon.jsx";
import { Link } from "react-router-dom";
import IconImage from "@/assets/icons/arrow-right.png"
import IconImageBlack from "@/assets/icons/black-arrow-right.svg"

const RequestAnAppraisal = ({lightMode}) => {
  return (
      <div className={`${lightMode ? "flex-col lg:flex-row-reverse gap-7.5" : "gap-10 lg:gap-7 lg:flex-row flex-col"} container mx-auto flex  justify-between`}>
        <div className={`${lightMode ? "w-full lg:w-[1137px]" : "xl:w-1/3"} w-full `}>
          <p className={`${lightMode ? "text-black" : "text-white"} text-xl md:text-4xl font-miller-light`}>
            Request An Appraisal
          </p>
          <p className={`${lightMode ? "text-black" : "text-white"}  py-8 text-xs md:text-base font-moderat-medium leading-6`}>
            Discover the true value of your property with a no-obligation, free
            appraisal. Our experienced agents provide accurate, data-driven
            assessments to help you make informed decisions about selling.
          </p>

          <Link to="#">
            <ButtonWithIcon
              text="REQUEST NOW"
              iconPosition="right"
              iconImage={lightMode ? IconImageBlack : IconImage}
              className={`${lightMode ? "text-black" : "text-white" } border-none bg-none font-bold font-moderat"`}
            />
          </Link>
        </div>
        <div className={`${lightMode ? "w-full lg:w-[553px]" : "w-full xl:w-1/2"} `}>
          <img
            src={lightMode ? image : image}
            alt="Section 3 Image"
            className="w-full lg:w-[845px] h-[109px] lg:h-full object-cover"
          />
        </div>
      </div>
  );
};

export default RequestAnAppraisal;
