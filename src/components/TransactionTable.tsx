import React from "react";

const transactionRow = {
  order_id: 281209,
  order_date: "7 July, 2023",
  order_amount: "₹1,278.23",
  transaction_fees: "₹22",
};

export const TransactionTable = () => {
  const transactions = Array(100).fill(transactionRow);

  return (
    <div className="bg-white shadow-cardShadow rounded-lg">
      <div className="p-6 pt-0 pb-4 lg:px-3 lg:pb-6 lg:pt-0 ">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <tr className=" bg-darkGrayBg">
              <th className="text-left p-2">Order ID</th>
              <th className="text-center">Order Date</th>
              <th className="text-right">Order Amount</th>
              <th className="text-right">Transcation Fee</th>
            </tr>
            {transactions?.map((row) => (
              <tr className="w-full p-2">
                <td className="text-left">{row?.order_id}</td>
                <td className="text-center">{row?.order_date}</td>
                <td className="text-right">{row?.order_amount}</td>
                <td className="text-right">{row?.transaction_fees}</td>
              </tr>
            ))}
          </table>
        </div>
        <div></div>
      </div>
    </div>
  );
};
