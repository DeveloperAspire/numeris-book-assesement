import { ChevronDown } from "@/assets/icons/ChevronDown";
import { NotifcationIcon } from "@/assets/icons/NotifcationIcon";

const Header = () => {
  return (
    <header className="py-4 pb-6 flex items-center justify-between w-full border-cyan-400 border-b border-b-[#A1B8FF33]">
      <h3 className="font-medium text-[28px] text-[##373B47] tracking-widest">
        INVOICE
      </h3>

      <div className="flex gap-8">
        <div className="bg-white rounded-full w-16 h-16 grid place-items-center">
          <NotifcationIcon />
        </div>
        <div className="bg-white rounded-full w-24 flex items-center px-3 py-0 justify-between">
          <span className="bg-[#003EFF] w-10 h-10 grid place-items-center rounded-full">
            <p className="text-white font-bold">KO</p>
          </span>
          <ChevronDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
