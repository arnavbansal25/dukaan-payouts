import React from "react";
import { TransactionTable } from "./TransactionTable";

const PaymentsPage = () => {
  return (
    <div className="bg-grayBg">
      <section className="mb-8 px-4 pt-8 lg:px-8">
        <div className="w-34 mb-7 flex items-center justify-between">
          <h3 className="text-xl font-medium text-black/85">Overview</h3>
          <div>Select</div>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="bg-white shadow-cardShadow rounded-lg w-full">
            <div className="flex flex-col space-y-1.5 p-5">
              <h4 className="text-black/70">Online orders</h4>
            </div>
            <div className="p-6 pt-0">
              <p className="text-3xl font-medium text-black/90">231</p>
            </div>
          </div>
          <div className="bg-white shadow-cardShadow rounded-lg w-full">
            <div className="flex flex-col space-y-1.5 p-5">
              <h4 className="text-black/70">Amount received</h4>
            </div>
            <div className="p-6 pt-0">
              <p className="text-3xl font-medium text-black/90">
                ₹23,92,312.19
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-8 lg:px-8">
        <h3 className="mb-6 text-xl font-medium text-black/85">
          Transactions | This Month
        </h3>
        <TransactionTable />
      </section>
    </div>
  );
};

export default PaymentsPage;
