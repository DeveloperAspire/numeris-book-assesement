import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/common/AlertDialog";
import InvoiceDetails from "../InvoiceDetails";

const InvoiceListItem = ({
  invoiceNumber,
  date,
  amount,
  status,
}: {
  invoiceNumber: string;
  date: string;
  amount: string;
  status: "paid" | "pending" | "draft" | "overdue";
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="flex justify-between items-center py-10 cursor-pointer">
          <div>
            <p className="text-[12px] font-medium tracking-widest text-[#373B47]">
              Invoice -
            </p>
            <p>{invoiceNumber}</p>
          </div>
          <div>
            <p className="uppercase text-[12px] font-medium tracking-widest	text-[#666F77]">
              Due date
            </p>
            <p className="text-[#697598] font-medium">{date}</p>
          </div>
          <div>
            <p className="uppercase text-[16px] font-medium md:mb-2">
              {amount}
            </p>
            {status === "paid" && (
              <span className="uppercase text-[#129043] font-medium text-xs rounded-full p-2 px-3 bg-[#E6FFF0] border border-[#12904333] mt-2">
                paid
              </span>
            )}
            {status === "pending" && (
              <span className="uppercase text-[#D98F00] font-medium text-xs rounded-full p-2 px-3 bg-[#FFF8EB] border border-[#D98F0033] mt-2">
                Pending payment
              </span>
            )}
            {status === "overdue" && (
              <span className="uppercase text-[#FF5663] font-medium text-xs rounded-full p-2 px-3 bg-[#FFF4F5] border border-[#FF566333] mt-2">
                Overdue
              </span>
            )}
            {status === "draft" && (
              <span className="uppercase text-[##373B47] font-medium text-xs rounded-full p-2 px-3 bg-[#F6F8FA] border border-[#12904333] mt-2">
                draft
              </span>
            )}
          </div>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <InvoiceDetails />
        <AlertDialogCancel />
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default InvoiceListItem;
