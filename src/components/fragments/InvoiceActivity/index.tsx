import UserImg from "@/assets/svg/man.svg";

const InvoiceActivity = ({
  title,
  date,
  action,
  activity,
}: {
  title: string;
  date: string;
  action: string;
  activity: string;
}) => {
  return (
    <div className="flex items-start gap-5">
      <div className="h-10 w-10 rounded-full overflow-hidden">
        <img src={UserImg} />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <p className="text-[16px] font-semibold text-[#000000]">{title}</p>
          <p className="text-[#697598] text-[14px] font-medium">{date}</p>
        </div>
        <div className="bg-[#F6F8FA] p-4 rounded-xl">
          <p className="text-[#697598] text-[14px] font-medium">
            {action}
            <span className="text-[#000000] font-medium ml-2">{activity}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceActivity;
