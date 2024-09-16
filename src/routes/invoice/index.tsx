import Money from "@/assets/icons/Money";
import Profile from "@/assets/icons/Profile";
import Setting from "@/assets/icons/Setting";
import Button from "@/components/common/Button";
import Header from "@/components/common/Header/Header";
import AnalyticsCard from "@/components/fragments/AnalyticsCard";
import InvoiceAction from "@/components/fragments/InvoiceAction";

const Invoice = () => {
  return (
    <div className="px-9 py-4 ">
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
        <h3 className="font-medium text-[28px] text-[##373B47]">
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
    </div>
  );
};

export default Invoice;
