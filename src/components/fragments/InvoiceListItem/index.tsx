const InvoiceListItem = () => {
  return (
    <div className="flex justify-between items-center py-10">
      <div>
        <p className="text-[12px] font-medium tracking-widest text-[#373B47]">
          Invoice -
        </p>
        <p>1023494 - 2304</p>
      </div>
      <div>
        <p className="uppercase text-[12px] font-medium tracking-widest	text-[#666F77]">
          Due date
        </p>
        <p className="text-[#697598] font-medium">May 19th, 2023</p>
      </div>
      <div>
        <p className="uppercase text-[16px] font-medium">$1,311,750.12</p>
        <span className="uppercase text-[#129043] font-medium text-xs rounded-full p-2 px-3 bg-[#E6FFF0] border border-[#12904333]">
          paid
        </span>
      </div>
    </div>
  );
};

export default InvoiceListItem;
