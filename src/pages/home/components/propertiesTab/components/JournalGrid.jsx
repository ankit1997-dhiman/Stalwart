import { S3_BASE_URL } from "@/config";
import { URLS } from "@/constants/Urls";
import { useTruncateText } from "@/hooks/useTruncateText";
import JournalCard from "./JournalCard";

const cards = [
  {
    image: `${S3_BASE_URL}/blog-image4.jpg`,
    title:
      "The Hidden Risks of Being a Landlord: What Most Property Owners Don’t Realise",
    description: useTruncateText(
      "Owning an investment property in Brisbane feels straightforward when the market is strong. Good tenants, rising rents, low vacancy. Easy. But behind the scenes, there are risks many landlords don’t see until it’s too late. And by the time they do notice the problem, the damage is already done.",
      13
    ),
    link: URLS.BLOGS1,
  },
  {
    image: `${S3_BASE_URL}/blog-image3.jpg`,
    title:
      "Brisbane & Southeast Queensland Growth: Why Supply Shortage Means Opportunity for Sellers",
    description: useTruncateText(
      "Right now, one thing is driving the Brisbane and Southeast Queensland property market more than anything else: there simply aren’t enough homes for the number of people who want to buy them.",
      13
    ),
    link: URLS.BLOGS2,
  },
  {
    image: `${S3_BASE_URL}/blog-image2.jpg`,
    title:
      "What Modern Buyers See Online: Why Your First Impression Is Now Digital",
    description: useTruncateText(
      "The first eight seconds are everything. Buyers take one quick look at your property online and decide, almost instantly, whether they think “this is it” or whether they should keep scrolling. They’re not waiting for an open home to form an opinion anymore. The first inspection now happens on their phone.",
      13
    ),
    link: URLS.BLOGS3,
  },
];

const JournalGrid = () => {
  return (
    <div className="lg:py-7.5 py-6">
      <div className="flex xl:flex-row flex-col gap-6 overflow-x-auto">
        {cards.map((card, idx) => (
          <JournalCard key={idx} {...card} />
        ))}
      </div>
    </div>
  );
};

export default JournalGrid;
