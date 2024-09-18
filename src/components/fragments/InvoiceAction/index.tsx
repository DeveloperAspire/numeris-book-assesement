interface IInvoiceAction {
  title: string;
  text: string;
  icon: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

const InvoiceAction: React.FC<IInvoiceAction> = ({
  title,
  text,
  icon,
  bgColor = "#fff",
  textColor,
}) => {
  return (
    <div
      className="bg-white p-10 rounded-3xl flex flex-col gap-4 w-full md:flex-1"
      style={{ backgroundColor: bgColor }}
    >
      {icon}
      <div className="flex items-center gap-2">
        <p className="font-medium text-[22px]" style={{ color: textColor }}>
          {title}
        </p>
      </div>
      <p className=" text-[#697598] font-medium" style={{ color: textColor }}>
        {text}
      </p>
    </div>
  );
};

export default InvoiceAction;
