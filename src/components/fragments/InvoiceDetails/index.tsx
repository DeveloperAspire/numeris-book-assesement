import Button from "@/components/common/Button";
import InvoiceActivity from "../InvoiceActivity";
import Company from "@/assets/svg/company.svg";

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
        <div className="flex w-3/5 gap-5">
          <Button variant="outline" label="Download as pdf" />

          <Button variant="primary" label="Send invoice" />

          <Button variant="outline" label="More" />
        </div>
      </div>

      <section className="grid gap-10 md:grid-cols-[1fr] lg:grid-cols-[1fr_480px]">
        <div className="mt-10 rounded-3xl bg-white p-5 border border-[#E3E6EF]">
          <InvoiceSender />

          <InvoiceItemList />

          <InvoiceNote />
        </div>

        <div className="p-10 flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-[20px] text-[##373B47]">
              Invoice Activity
            </h4>
          </div>

          <div className="flex flex-col gap-6 mt-5">
            <InvoiceActivity />
            <InvoiceActivity />
            <InvoiceActivity />
            <InvoiceActivity />
            <InvoiceActivity />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvoiceDetails;

const InvoiceSender = () => {
  return (
    <div className="rounded-3xl p-10 bg-[#FCDDEC] flex flex-col gap-10">
      <div className="flex items-start justify-between">
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
        <div>
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

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-[10px] uppercase text-[#697598]">
              Invoice no
            </p>
            <p className="font-semibold text-[10px]">1023902390</p>
          </div>
          <div>
            <p className="text-sm text-[10px] uppercase text-[#697598]">
              Issue date
            </p>
            <p className="font-semibold text-[10px]">March 30th, 2023</p>
          </div>
          <div>
            <p className="text-sm text-[10px] uppercase text-[#697598]">
              Due date
            </p>
            <p className="font-semibold text-[10px]">May 19th, 2023</p>
          </div>
          <div>
            <p className="text-sm text-[10px] uppercase text-[#697598]">
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
    <div className="grid grid-cols-5 gap-10">
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
      <div className="flex items-center justify-between flex-wrap mt-2 gap-x-14 gap-y-4">
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

      <div className="flex items-center flex-wrap mt-3 gap-x-14">
        <div>
          <p className="text-sm text-[10px] uppercase text-[#697598]">
            bank address
          </p>
          <p className="font-semibold text-[10px]">
            7, Livington road, old road avenue, USA
          </p>
        </div>
        <div>
          <p className="text-sm text-[10px] uppercase text-[#697598]">
            account number
          </p>
          <p className="font-semibold text-[10px]">USD ($)</p>
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
