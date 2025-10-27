import HeroSection from "@/common/HeroSection";
import { Typography } from "@/common/Typography";
import TypographyList from "@/common/TypographyList";
import React from "react";
import bgImage from "@/assets/images/home-hero.png";

export const PrivacyPolicy = () => {
  const personalInfoList = [
    "Name, mailing or residential address, email address, and phone number",
    "Date of birth and proof of identity (driver’s licence, passport, or Medicare card – never original copies)",
    "Employment, income, or financial details for tenancy or sales applications",
    "Property ownership, rental history, or tenancy records",
    "Details of occupants, pets, and vehicles",
    "Payment or bond information related to trust transactions",
    "Images or video from property marketing or inspections",
    "Website usage information, IP address, and browser details",
    "Any additional information you provide directly or through your dealings with us",
  ];

  const collectDirectList = [
    "When you contact us by phone, email, or in person",
    "When you fill out enquiry, tenancy, or sales application forms",
    "When you attend property inspections or provide feedback",
    "When you engage with us via our website or social media channels",
    "When you request information, appraisals, or property updates",
  ];

  const collectThirdPartyList = [
    "Previous property managers, landlords, or tenancy databases",
    "Referees, legal representatives, or financial advisers",
    "Credit reporting or government agencies",
    "Publicly available sources or online platforms where you have provided your details",
  ];

  const noInfoList = [
    "We may be unable to provide certain services, or the service quality may be affected;",
    "We may be unable to communicate important updates, offers, or opportunities that may be relevant to you; and",
    "Your online experience with us may be limited or less personalised.",
  ];

  const personalInfo = [
    "Providing real estate, leasing, and property management services",
    " Responding to enquiries and providing customer support",
    "Enabling access to protected areas of our website or digital systems",
    "Conducting business operations and processing, including with authorised contractors and technology providers",
    " Managing appraisals, inspections, repairs, and maintenance",
    "Marketing, research, and service development",
    "Updating contact records and maintaining our databases",
    " Handling complaints and feedback",
    " Complying with legal, financial, and regulatory obligations.",
  ];
  const discloseInfo = [
    "Our staff, contractors, and authorised representatives;",
    "Landlords, tenants, buyers, and sellers directly involved in a transaction;",
    "Professional advisers such as solicitors, conveyancers, or accountants;",
    "Tradespeople and service providers engaged to perform repairs or maintenance;",
    "Software and technology partners who support our business systems",
    "Financial institutions, insurers, or utility providers (where relevant);",
    "The Residential Tenancies Authority (RTA), Titles Registry Office, or other government bodies;",
    "Any other organisation with your express consent or where required by law.",
  ];

  return (
    <>
      <HeroSection title={"Privacy Policy"} bgImage={bgImage} />

      <div className="container pt-10">
        <Typography
          className="font-moderat-bold text-2xl py-10"
          text="Privacy Policy"
        />
        <Typography
          className="text-base pb-2 font-moderat-medium"
          text="Stalwart Real Estate (“we”, “our”, “us”) understands that privacy and trust are the foundation of every relationship we build."
        />
        <Typography
          className="text-base pb-2 font-moderat-medium"
          text="We are committed to protecting the personal information of our clients, tenants, landlords, and visitors in accordance with the Privacy Act 1988 (Cth), the Australian Privacy Principles (APPs), and applicable Queensland tenancy legislation."
        />
        <Typography
          className="text-base pb-2 font-moderat-medium"
          text="This Privacy Policy explains how we collect, use, store, and protect your personal information, and how you can contact us if you have any questions or concerns."
        />
        {/* Section */}
        <Typography
          className="text-xl py-8 font-moderat-bold"
          text="What is personal information?"
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="“Personal information” means any information or opinion about an identified individual, or an individual who is reasonably identifiable, whether the information is true or not and whether it is recorded in a material form or not."
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="This may include your name, address, email address, phone number, occupation, or any other details that can reasonably identify you."
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="If the information we collect can identify you (either on its own or when combined with other information we hold), it is treated as personal information."
        />
        {/* Personal Info List */}
        <Typography
          className="text-xl py-8 font-moderat-bold"
          text="What personal information do we collect and hold? We only collect information that is reasonably necessary for our business functions or required by law."
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="The types of personal information we may collect include:"
        />
        <ul className="list-disc list-inside space-y-2 text-black">
          {personalInfoList.map((item, index) => (
            <TypographyList key={index} text={item} />
          ))}
        </ul>
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="We may also collect non-identifiable information, such as aggregated website analytics or anonymous survey data, which cannot be linked back to an individual."
        />
        {/* How we Collect */}
        <Typography
          className="text-xl py-8 font-moderat-bold"
          text="How we collect personal information"
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="We collect personal information directly from you whenever practical for example:"
        />
        <ul className="list-disc list-inside space-y-2 text-black">
          {collectDirectList.map((item, index) => (
            <TypographyList key={index} text={item} />
          ))}
        </ul>
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="We may also receive information from third parties such as:"
        />
        <ul className="list-disc list-inside space-y-2 text-black">
          {collectThirdPartyList.map((item, index) => (
            <TypographyList key={index} text={item} />
          ))}
        </ul>
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="If we receive personal information we did not request, we will determine whether it is relevant and lawful to retain it. If not, we will securely destroy or de-identify it."
        />
        {/* Cookies Section */}
        <Typography className="text-xl py-8 font-moderat-bold" text="Cookies" />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="When you visit our website, we may use small data files known as cookies to recognise your device and improve your browsing experience."
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="Cookies help us analyse website usage, measure traffic patterns, and tailor content or functionality to better serve our visitors. Cookies do not collect personal information."
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="You can configure your browser to refuse cookies; however, some features of our website may not operate as intended if cookies are disabled."
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="We may also log IP addresses and basic device information to help monitor website performance, security, and usage trends."
        />
        {/* If not provide Info */}
        <Typography
          className="text-xl py-8 font-moderat-bold"
          text="What happens if we can’t collect your personal information?"
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="If you choose not to provide the personal information we request:"
        />
        <ul className="list-disc list-inside space-y-2 text-black">
          {noInfoList.map((item, index) => (
            <TypographyList key={index} text={item} />
          ))}
        </ul>
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="Providing accurate information helps us maintain a high standard of service and ensure compliance with our legal obligations under the Privacy Act 1988 (Cth) and Residential Tenancies and Rooming Accommodation Act 2008 (Qld)."
        />
        <Typography
          className="text-xl py-8 font-moderat-bold"
          text="Why we collect, hold, use and disclose personal information"
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="We collect personal information so we can operate effectively and provide
      exceptional real estate and property management services. "
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="Specifically, we may use your personal information for purposes including:"
        />
        <ul className="list-disc list-inside space-y-2 text-black">
          {personalInfo.map((item, index) => (
            <TypographyList key={index} text={item} />
          ))}
        </ul>
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text=" We will not use or disclose your personal information for any purpose
      other than the purpose for which it was collected, unless authorised by
      you or required by law."
        />
        <Typography
          className="text-xl py-8 font-moderat-bold"
          text="To whom we may disclose your personal information"
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="We collect personal information so we can operate effectively and provide
      exceptional real estate and property management services. "
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="We may disclose your personal information to:"
        />
        <ul className="list-disc list-inside space-y-2 text-black">
          {discloseInfo.map((item, index) => (
            <TypographyList key={index} text={item} />
          ))}
        </ul>
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="We take reasonable steps to ensure all third parties handle your information securely and only for authorised purposes."
        />
        <Typography
          className="text-xl py-8 font-moderat-bold"
          text="Direct marketing"
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="We may send you marketing updates, property alerts, or information about our services that we believe may be of genuine interest to you."
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="These communications may be sent by email, SMS, or post. You can opt out at any time by using the unsubscribe link provided in our messages or by contacting us directly via info@stalwartrealestate.com.au"
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="We will never use or disclose sensitive information for marketing without your explicit consent."
        />
        <Typography
          className="text-xl py-8 font-moderat-bold"
          text=" How you can access and correct your personal information"
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="You may request access to the personal information we hold about you at any time by contacting us using the details provided on our website."
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="If access is granted, we will provide the information in a suitable format."
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="We do not charge for correcting your personal information."
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="In some cases, we may refuse access where disclosure would breach another person’s privacy or a confidentiality obligation. If we refuse access, we will provide written reasons and inform you of your right to make a complaint."
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="If you believe the information we hold about you is inaccurate, incomplete or outdated, you can request an amendment at any time."
        />
        <Typography
          className="text-xl py-8 font-moderat-bold"
          text="How to make a privacy complaint"
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="If you believe that your privacy has been breached, please contact us with full details of your concern so that we can investigate the matter promptly."
        />
        <Typography
          className="text-xl py-8 font-moderat-bold"
          text="Do we disclose your personal information outside Australia?"
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="Some of our technology partners or cloud service providers may store or process data in other countries such as Singapore or the United States."
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="We take reasonable steps to ensure that any overseas recipients comply with Australian privacy laws and apply the same standards of protection required under the Privacy Act 1988 (Cth) and Australian Privacy Principles (APPs)."
        />
        <Typography
          className="text-xl py-8 font-moderat-bold"
          text="Security"
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="We take every reasonable precaution to protect your personal information from misuse, loss, unauthorised access, or disclosure."
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="Our systems use encryption, secure servers, multi-factor authentication,
      and restricted access for staff and contractors."
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="While we maintain high security standards, please note that data transmitted over the internet may not always be fully secure, and any information sent online is done so at your own risk."
        />
        <Typography
          className="text-xl py-8 font-moderat-bold"
          text="Links to other websites"
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="Our website may include links to external or third-party websites."
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="We are not responsible for the privacy practices, content, or security of those websites."
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="You should review their individual privacy policies when visiting other sites."
        />
        <Typography
          className="text-xl py-8 font-moderat-bold"
          text="Contacting us"
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="If you have any questions, feedback, or concerns about this Privacy Policy or the way we handle your personal information, please contact our Privacy Officer:"
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="Stalwart Real Estate"
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="PO Box 1114 Park Ridge QLD 4125"
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="P: (07) 3112 8088 | E:  info@stalwartrealestate.com.au"
        />
        <Typography
          className="text-xl py-8 font-moderat-bold"
          text="Changes to this policy"
        />
        <Typography
          className="text-base pb-3 font-moderat-medium"
          text="We may update this Privacy Policy from time to time to reflect changes in legislation, technology, or our business operations.The most recent version will always be available on our website."
        />

        <div className="pt-20"></div>
      </div>
    </>
  );
};
