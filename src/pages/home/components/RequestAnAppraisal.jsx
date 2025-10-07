import image from "@/assets/images/request.png";
import ButtonWithIcon from "@/common/Button/ButtonWithIcon.jsx";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import IconImage from "@/assets/icons/Arrow-right.png"

const RequestAnAppraisal = () => {
  return (
    <section className="bg-[#4F4C45] py-[79px] xl:px-0 px-12.5">
      <div className="container mx-auto flex lg:flex-row flex-col justify-between gap-10 lg:gap-7">
        <div className="w-full xl:w-1/3">
          <p className="text-white text-xl md:text-4xl font-miller-light">
            Request An Appraisal
          </p>
          <p className="text-white py-8 text-xs md:text-base font-moderat-medium leading-6">
            Discover the true value of your property with a no-obligation, free
            appraisal. Our experienced agents provide accurate, data-driven
            assessments to help you make informed decisions about selling.
          </p>

          <Link to="#">
            <ButtonWithIcon
              text="REQUEST NOW"
              iconPosition="right"
              iconImage={IconImage}
              className="border-none bg-none !text-white font-bold font-moderat"
            />
          </Link>
        </div>
        <div className="w-full xl:w-1/2">
          <img
            src={image}
            alt="Section 3 Image"
            className="w-[340px] lg:w-[845px] h-[109px] lg:h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default RequestAnAppraisal;
