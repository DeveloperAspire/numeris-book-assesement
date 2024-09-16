import { Category } from "@/assets/icons/Category";

interface IAnalyticsCard {
  title: string;
  value: string;
  count: string;
  countBg: string; // Ensure this is a valid CSS color string
}

const AnalyticsCard: React.FC<IAnalyticsCard> = ({
  title,
  value,
  count,
  countBg,
}) => {
  return (
    <div className="bg-white p-10 rounded-3xl flex flex-col gap-4 flex-1">
      <Category />
      <div className="flex items-center gap-2">
        <p className="uppercase text-[#697598] text-xs tracking-wider">
          {title}
        </p>
        <span
          className="uppercase text-[#373B47] font-medium text-xs rounded-full p-2 px-3"
          style={{ backgroundColor: countBg }}
        >
          {count}
        </span>
      </div>
      <p className="text-[28px] font-medium">{value}</p>
    </div>
  );
};

export default AnalyticsCard;
