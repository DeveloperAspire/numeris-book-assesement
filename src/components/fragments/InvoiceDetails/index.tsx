import Button from "@/components/common/Button";
import InvoiceActivity from "../InvoiceActivity";
import Company from "@/assets/svg/company.svg";
import {
  Popover as AppPopover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/common/Popover";
import { ToggleGroup, ToggleGroupItem } from "@/components/common/ToggleGroup";

const InvoiceDetails = () => {
  return (
    <div className="overflow-auto">
      <div className="flex items-start justify-between mt-10 flex-wrap">
        <div className="">
          <div>
            <h3 className="font-bold text-[28px] text-[#1F1F23]">
              Invoice - 1023494 - 2304
            </h3>
            <p className="text-[#697598] text-[14px]">
              View the details and activity of this invoice
            </p>
          </div>

          <span className="uppercase mt-5 inline-flex text-[#003EFF] font-medium text-[10px] rounded-full p-2 px-3 bg-[#F2FBFF] border border-[#003EFF33]">
            Partial payment
          </span>
        </div>

        <div className="flex w-full md:w-3/5 gap-5 flex-wrap md:flex-nowrap mt-5 md:mt-0">
          <Button
            variant="outline"
            label="Download as pdf"
            textColor="#003EFF"
          />
          <Button variant="primary" label="Send invoice" />
          <Popover />
        </div>
      </div>

      <div className="flex mt-5 rounded-3xl bg-white px-5 py-4 md:py-2 border border-[#E3E6EF] items-center gap-10 flex-wrap">
        <p className="uppercase text-[10px] text-[#697598] tracking-widest text-center">
          Reminders
        </p>
        <ToggleGroupDemo />
      </div>

      <section className="grid gap-10 md:grid-cols-[1fr] lg:grid-cols-[1fr_480px]">
        <div className="mt-10 rounded-3xl bg-white p-5 border border-[#E3E6EF]">
          <InvoiceSender />

          <InvoiceItemList />

          <InvoiceNote />
        </div>

        <div className="p-0 md:p-5 flex-1 mt-10">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-[20px] text-[##373B47]">
              Invoice Activity
            </h4>
          </div>
          <div className="flex flex-col gap-10 mt-5">
            <InvoiceActivity
              title="You"
              date="Today, 12:20 PM"
              action="Created invoice"
              activity="00239434/Olaniyi Ojo Adewale"
            />
            <InvoiceActivity
              title="You"
              date="Today, 12:20 PM"
              action="Sent invoice"
              activity="00239434/Olaniyi Ojo Adewale to Olaniyi Ojo Adewale"
            />
            <InvoiceActivity
              title="Payment Confirmed"
              date="Today, 12:20 PM"
              action="You manually confirmed a partial payment of"
              activity="$2,000,000"
            />
            <InvoiceActivity
              title="Payment Confirmed"
              date="Today, 12:20 PM"
              action="You manually confirmed a full payment of"
              activity="$6,000,000"
            />
            <InvoiceActivity
              title="You"
              date="Today, 12:20 PM"
              action="Sent invoice"
              activity="00239434/Olaniyi Ojo Adewale to Olaniyi Ojo Adewale"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvoiceDetails;

const InvoiceSender = () => {
  return (
    <div className="rounded-3xl p-5 md:p-10 bg-[#FCDDEC] flex flex-col gap-10">
      <div className="flex items-start justify-between flex-wrap">
        <div>
          <p className="uppercase text-[10px] text-[#697598] font-semibold tracking-widest">
            Sender
          </p>
          <div className="flex gap-5 mt-4">
            <div className="rounded-lg h-12 w-12 bg-white grid place-items-center">
              <img src={Company} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold">Fabulous Enterprise</p>
              <p className="text-sm text-[#697598]">+386 989 271 3115</p>
              <p className="text-sm text-[#697598]">
                +1331 Hart Ridge Road 48436 Gaines, MI
              </p>
              <p className="text-sm text-[#697598]">info@fabulousenterise.co</p>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <p className="uppercase text-[10px] text-[#697598] font-semibold tracking-widest">
            Customer
          </p>
          <div className="flex flex-col gap-1 mt-4">
            <p className="text-sm font-semibold">Olaniyi Ojo Adewale</p>
            <p className="text-sm text-[#697598]">+386 989 271 3115</p>
            <p className="text-sm text-[#697598]">Oinfo@fabulousenterise.co</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="uppercase text-[10px] text-[#697598] font-semibold tracking-widest">
          Invoice details
        </p>

        <div className="flex items-center justify-between flex-wrap gap-y-2">
          <div>
            <p className="text-[10px] uppercase text-[#697598]">Invoice no</p>
            <p className="font-semibold text-[10px]">1023902390</p>
          </div>
          <div>
            <p className="text-[10px] uppercase text-[#697598]">Issue date</p>
            <p className="font-semibold text-[10px]">March 30th, 2023</p>
          </div>
          <div>
            <p className="text-[10px] uppercase text-[#697598]">Due date</p>
            <p className="font-semibold text-[10px]">May 19th, 2023</p>
          </div>
          <div>
            <p className="text-[10px] uppercase text-[#697598]">
              Billing currency
            </p>
            <p className="font-semibold text-[10px]">USD ($)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const InvoiceItemList = () => {
  return (
    <div className="mt-10">
      <h4 className="font-bold text-[20px] text-[#1F1F23]">Items</h4>

      <div className="flex flex-col gap-10">
        <InvoiceItem
          itemName="Email marketing"
          itemDesc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"
          quantity="10"
          price="$1,500"
          total="$15,000.00"
        />
        <InvoiceItem
          itemName="Video looping effect"
          quantity="6"
          price="$1,110,500"
          total="$6,663,000.00"
        />
        <InvoiceItem
          itemName="Graphic design for emails"
          itemDesc="Tsit voluptatem accusantium "
          quantity="7"
          price="$2,750"
          total="$19,250.00"
        />
        <InvoiceItem
          itemName="Video looping effect"
          quantity="6"
          price="$1,110,500"
          total="$6,663,000.00"
        />
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-[14px] uppercase text-[#B7BDCF]">
            Subtotal
          </p>
          <p className="text-sm text-[20px] uppercase text-[#697598]">
            $6,697,200.00
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-[14px] uppercase text-[#B7BDCF]">
            Discount
          </p>
          <p className="text-sm text-[20px] uppercase text-[#697598]">
            $167,430.00
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-[18px] font-semibold uppercase text-[#373B47]">
            Total amount due
          </p>
          <p className="text-sm text-[25px] font-bold uppercase text-[#373B47]">
            $6,529,770.00
          </p>
        </div>
      </div>

      <PaymentInfo />
    </div>
  );
};

const InvoiceItem = ({
  itemName,
  itemDesc,
  quantity,
  price,
  total,
}: {
  itemName: string;
  itemDesc?: string;
  quantity: string;
  price: string;
  total: string;
}) => {
  return (
    <div className="grid md:grid-cols-5 gap-10 border-b border-b-gray-200 md:border-0 pb-10 md:p-0">
      <div className="col-span-2">
        <p className="font-medium">{itemName}</p>
        {itemDesc && <p className="text-[#666F77] text-xs">{itemDesc}</p>}
      </div>
      <div>
        <p className="font-medium text-sm">{quantity}</p>
      </div>
      <div>
        <p className="font-medium text-sm">{price}</p>
      </div>

      <div>
        <p className="font-medium text-sm">{total}</p>
      </div>
    </div>
  );
};

const PaymentInfo = () => {
  return (
    <div className="mt-10 rounded-3xl bg-white p-5 border border-[#E3E6EF]">
      <p className="uppercase text-[10px] text-[#697598] font-semibold tracking-widest">
        Payment information
      </p>
      <div className="flex items-center justify-between flex-wrap mt-2 gap-x-14 gap-y- ">
        <div>
          <p className="text-sm text-[10px] uppercase text-[#697598]">
            Account name
          </p>
          <p className="font-semibold text-[10px]">Numeris Book</p>
        </div>
        <div>
          <p className="text-sm text-[10px] uppercase text-[#697598]">
            account number
          </p>
          <p className="font-semibold text-[10px]">2345657566</p>
        </div>
        <div>
          <p className="text-sm text-[10px] uppercase text-[#697598]">
            Ach routing no
          </p>
          <p className="font-semibold text-[10px]">M19474756</p>
        </div>
        <div>
          <p className="text-sm text-[10px] uppercase text-[#697598]">
            Bank Name
          </p>
          <p className="font-semibold text-[10px]">Chase City</p>
        </div>
      </div>

      <div className="flex items-center flex-wrap mt-3 gap-x-14gap-y-3">
        <div>
          <p className="text-sm text-[10px] uppercase text-[#697598]">
            bank address
          </p>
          <p className="font-semibold text-[10px]">
            7, Livington road, old road avenue, USA
          </p>
        </div>
        <div>
          <p className="text-sm text-[10px] uppercase text-[#697598] text-left">
            account number
          </p>
          <p className="font-semibold text-[10px] text-right">USD ($)</p>
        </div>
      </div>
    </div>
  );
};

const InvoiceNote = () => {
  return (
    <div className="rounded-3xl p-5 bg-[#F7F8FA] flex flex-col mt-5">
      <p className="text-sm text-[10px] uppercase text-[#697598]">Note</p>
      <p className="font-medium text-[16px] text-[#666F77]">
        Thank you for your patronage
      </p>
    </div>
  );
};

export function Popover() {
  return (
    <AppPopover>
      <PopoverTrigger asChild>
        <div className="w-full md:w-1/2">
          <Button variant="outline" label="More" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full md:w-full shadow-none rounded-2xl p-5">
        <div className="flex flex-col gap-4">
          <p className="text-[10px] font-semibold  uppercase text-[#697598] tracking-widest">
            Duplicate invoice
          </p>
          <p className="text-[10px] font-semibold tracking-widest uppercase text-[#697598]">
            Get sharable link
          </p>
        </div>
      </PopoverContent>
    </AppPopover>
  );
}

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="multiple" className="gap-5 my-5 flex-wrap">
      <ToggleGroupItem value="14-days" aria-label="14 days" className="">
        <div>
          <p>14 days before due date</p>
        </div>
      </ToggleGroupItem>
      <ToggleGroupItem value="7-days" aria-label="7 days">
        <div>
          <p>7 days before due date</p>
        </div>
      </ToggleGroupItem>
      <ToggleGroupItem value="3-days" aria-label="3 days">
        <div>
          <p>3 days before due date</p>
        </div>
      </ToggleGroupItem>
      <ToggleGroupItem value="24-hr" aria-label="24 hours">
        <div>
          <p>24 hours before due date</p>
        </div>
      </ToggleGroupItem>
      <ToggleGroupItem value="dueday" aria-label="due date">
        <div>
          <p>On the due date</p>
        </div>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
