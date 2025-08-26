import hover1 from "@/assets/images/HoverImage1.png";
import hover2 from "@/assets/images/HoverImage2.png";
import hover3 from "@/assets/images/HoverImage3.png";
import image1 from "@/assets/images/Image1.png";
import image2 from "@/assets/images/Image2.png";
import image3 from "@/assets/images/Image3.png";
import mobileImage1 from "@/assets/images/mobile-image-house.png";

export const Section4 = () => {
  return (
    <section className="w-full flex items-stretch justify-between gap-4 h-[400px] md:h-[1080px] md:my-9">
      <div
        className="xl:hidden block flex-1  bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${mobileImage1})` }}
      ></div>
      {/* Left Image */}
      <div
        className="xl:block hidden w-[30%] relative group overflow-hidden h-full bg-cover bg-center transition-opacity duration-700"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ backgroundImage: `url(${hover1})` }}
        />
      </div>

      {/* Right Side */}
      <div className=" xl:flex hidden w-[70%]  flex-col gap-y-4 h-full">
        {/* Top Right */}
        <div
          className="flex-1 relative group overflow-hidden bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${image2})` }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ backgroundImage: `url(${hover2})` }}
          />
        </div>

        {/* Bottom Right */}
        <div
          className="flex-1 relative group overflow-hidden bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${image3})` }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ backgroundImage: `url(${hover3})` }}
          />
        </div>
      </div>
    </section>
  );
};
