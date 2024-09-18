import UserImg from "@/assets/svg/man.svg";

const InvoiceActivity = () => {
  return (
    <div className="flex items-start gap-5">
      <div className="h-10 w-10 rounded-full overflow-hidden">
        <img src={UserImg} />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <p className="text-[16px] font-semibold text-[#000000]">You</p>
          <p className="text-[#697598] text-[14px] font-medium">
            Today, 12:20 PM
          </p>
        </div>
        <div className="bg-[#F6F8FA] p-4 rounded-xl">
          <p className="text-[#697598] text-[14px] font-medium">
            Created invoice{" "}
            <span className="text-[#000000] font-medium">
              00239434/Olaniyi Ojo Adewale
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceActivity;
