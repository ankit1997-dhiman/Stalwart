import image from "@/assets/images/request.png";
import ButtonWithIcon from "@/common/Button/ButtonWithIcon.jsx";
import { Link } from "react-router-dom";
import IconImage from "@/assets/icons/arrow-right.png";
import IconImageBlack from "@/assets/icons/black-arrow-right.svg";
import { LenisAnimatedLink } from "@/components/LenisAnimatedLink";
import { URLS } from "@/constants/Urls";

const RequestAnAppraisal = ({ lightMode }) => {
  return (
    <div
      className={`${
        lightMode
          ? "flex-col lg:flex-row-reverse gap-7.5"
          : "gap-10 lg:gap-7 lg:flex-row flex-col"
      } container mx-auto flex  justify-between`}
    >
      <div
        className={`${lightMode ? "w-full lg:w-[1137px]" : "xl:w-1/3"} w-full `}
      >
        <p
          className={`${
            lightMode ? "text-black" : "text-white"
          } text-xl md:text-4xl font-miller-light`}
        >
          Request An Appraisal
        </p>
        <p
          className={`${
            lightMode ? "text-black" : "text-white"
          }  py-8 text-xs md:text-base font-moderat-medium leading-6`}
        >
          Discover the true value of your property with a no-obligation, free
          appraisal. Our experienced agents provide accurate, data-driven
          assessments to help you make informed decisions about selling.
        </p>

        <LenisAnimatedLink
          to={URLS.ABOUT}
          iconPosition="right"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="8"
              viewBox="0 0 29 8"
              fill="none"
            >
              <path
                d="M28.3536 4.03544C28.5488 3.84018 28.5488 3.5236 28.3536 3.32833L25.1716 0.146353C24.9763 -0.0489091 24.6597 -0.0489092 24.4645 0.146353C24.2692 0.341615 24.2692 0.658198 24.4645 0.85346L27.2929 3.68189L24.4645 6.51031C24.2692 6.70558 24.2692 7.02216 24.4645 7.21742C24.6597 7.41268 24.9763 7.41268 25.1716 7.21742L28.3536 4.03544ZM28 3.68189L28 3.18189L4.37114e-08 3.18188L0 3.68188L-4.37114e-08 4.18188L28 4.18189L28 3.68189Z"
                fill="white"
              />
            </svg>
          }
          className={`${
            lightMode ? "!text-black" : "!text-white"
          }  font-moderat-bold text-xs md:text-sm`}
        >
          REQUEST NOW
        </LenisAnimatedLink>
      </div>
      <div
        className={`${lightMode ? "w-full lg:w-[553px]" : "w-full xl:w-1/2"} `}
      >
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
