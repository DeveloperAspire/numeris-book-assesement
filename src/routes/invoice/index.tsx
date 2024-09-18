import Money from "@/assets/icons/Money";
import Profile from "@/assets/icons/Profile";
import Setting from "@/assets/icons/Setting";
import Button from "@/components/common/Button";
import Header from "@/components/common/Header/Header";
import AnalyticsCard from "@/components/fragments/AnalyticsCard";
import InvoiceAction from "@/components/fragments/InvoiceAction";
import InvoiceActivity from "@/components/fragments/InvoiceActivity";
import InvoiceListItem from "@/components/fragments/InvoiceListItem";

const Invoice = () => {
  return (
    <div className="px-9 py-4 overflow-auto h-full">
      <Header />

      <div className="flex items-center justify-between mt-10">
        <h3 className="font-medium text-[28px] text-[##373B47]">Invoice</h3>
        <div className="flex w-2/5 gap-10">
          <Button variant="outline" label="See what's new" />

          <Button variant="primary" label="Create" />
        </div>
      </div>

      <div className="flex items-center justify-between mt-10 gap-10 flex-wrap">
        <AnalyticsCard
          title="total paid"
          count="1289"
          value="$4,120,102.76"
          countBg="#B6FDD3"
        />
        <AnalyticsCard
          title="total overdue"
          count="13"
          value="$23,000.03"
          countBg="#FFB7BD"
        />
        <AnalyticsCard
          title="total draft"
          count="06"
          value="$12,200.00"
          countBg="#D9D9E0"
        />
        <AnalyticsCard
          title="total unpaid"
          count="08"
          value="$87,102.00"
          countBg="#F8E39B"
        />
      </div>

      <div className="mt-10">
        <h3 className="font-medium text-[20px] text-[##373B47]">
          Invoice Actions
        </h3>

        <div className="flex items-center justify-between mt-10 gap-10 flex-wrap">
          <InvoiceAction
            title="Create New Invoice"
            text="Create new invoices easily"
            icon={<Money />}
            bgColor="#003EFF"
            textColor="#fff"
          />
          <InvoiceAction
            title="Change Invoice settings"
            text="Customise your invoices"
            icon={<Setting />}
          />
          <InvoiceAction
            title="Manage Customer list"
            text="Add and remove customers"
            icon={<Profile />}
          />
        </div>
      </div>

      <section className="grid grid-cols-3 gap-10">
        <div className="mt-10 rounded-2xl bg-white p-10 flex-1 col-span-2">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-[20px] text-[##373B47]">
              Recent Invoices
            </h4>

            <div className="w-2/6">
              <Button
                variant="outline"
                label="View all invoices"
                textColor="#003EFF"
              />
            </div>
          </div>

          <div>
            <p className="uppercase text-[12px] font-medium tracking-widest	">
              today - 27th November, 2022
            </p>

            <InvoiceListItem />
            <InvoiceListItem />
          </div>
          <div>
            <p className="uppercase text-[12px] font-medium tracking-widest	">
              8th december, 2022
            </p>

            <InvoiceListItem />
            <InvoiceListItem />
            <InvoiceListItem />
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-white p-10 flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-[20px] text-[##373B47]">
              Recent Activities
            </h4>

            <div className="w-2/6">
              <Button variant="outline" label="View all" textColor="#003EFF" />
            </div>
          </div>

          <InvoiceActivity />
          <InvoiceActivity />
          <InvoiceActivity />
          <InvoiceActivity />
          <InvoiceActivity />
        </div>
      </section>
    </div>
  );
};

export default Invoice;
