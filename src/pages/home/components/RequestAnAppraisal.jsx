import image from "@/assets/images/ImageContainer.png";
import ButtonWithIcon from "@/common/Button/ButtonWithIcon.jsx";
import { CgArrowLongRight } from "react-icons/cg";

const RequestAnAppraisal = () => {
  return (
    <section className="bg-[#4F4C45] pt-[90px] pb-[72px] md:px-0 px-12.5">
      <div className="container mx-auto flex md:flex-row flex-col justify-between items-center gap-7">
        <div className="w-full md:w-1/3">
          <h4 className="text-white text-xl md:text-4xl">
            Request An Appraisal
          </h4>
          <p className="text-white my-8 text-xs md:text-base">
            Discover the true value of your property with a no-obligation, free
            appraisal. Our experienced agents provide accurate, data-driven
            assessments to help you make informed decisions about selling.
          </p>
          <ButtonWithIcon
            text="Next Step"
            icon={CgArrowLongRight}
            iconPosition="right"
            className="border-none bg-none text-white"
          />
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt="Section 3 Image"
            className="w-[845px] h-[206px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default RequestAnAppraisal;
