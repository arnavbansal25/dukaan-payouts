import React from "react";
import searchIcon from "../assets/search.svg";
import sortIcon from "../assets/sort.svg";
import downloadIcon from "../assets/download.svg";
import infoIcon from "../assets/info.svg";

const transactionRow = {
  order_id: 281209,
  order_date: "7 July, 2023",
  order_amount: "₹1,278.23",
  transaction_fees: "₹22",
};

export const TransactionTable = () => {
  const transactions = Array(10).fill(transactionRow);
  const numbers = Array(18).fill(0);

  return (
    <div className="bg-white shadow-cardShadow rounded-lg pt-3">
      <div className="flex justify-between ml-3 mb-3 mr-3">
        <div className="flex items-center bg-white rounded-lg pl-4 py-2 w-1/3 border-2 border-darkGrayBg">
          <img src={searchIcon} alt="search-icon" />
          <input
            placeholder="Search features, tutorials, etc."
            className="bg-white border-none focus:outline-none pl-2 w-full"
          />
        </div>
        <div className="flex gap-4">
          <div className="text-black/70 px-3 py-1 border-2 rounded-md border-darkGrayBg flex items-center gap-2">
            Sort
            <img src={sortIcon} alt="sort-icon" />
          </div>
          <div className="text-black/70 px-3 py-1 border-2 rounded-md border-darkGrayBg flex items-center">
            <img src={downloadIcon} alt="download-icon" />
          </div>
        </div>
      </div>
      <div className="p-6 pt-0 pb-4 lg:px-3 lg:pb-6 lg:pt-0 ">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <tr className="bg-darkGrayBg rounded-lg">
              <th className="text-left text-black/70 font-normal p-3">
                Order ID
              </th>
              <th className="text-center text-black/70 font-normal">
                Order Date ▼
              </th>
              <th className="text-right text-black/70 font-normal">
                Order Amount
              </th>
              <th className="text-right text-black/70 font-normal pr-3 flex justify-end gap-1 h-12 items-center">
                Transcation Fee
                <img src={infoIcon} alt="info-icon" />
              </th>
            </tr>
            {transactions?.map((row) => (
              <tr className="w-full">
                <td className="text-left text-primary p-3">#{row?.order_id}</td>
                <td className="text-center">{row?.order_date}</td>
                <td className="text-right">{row?.order_amount}</td>
                <td className="text-right pr-3">{row?.transaction_fees}</td>
              </tr>
            ))}
          </table>
        </div>
        <div className="flex justify-center items-center gap-5 mt-4">
          <div className="text-black/70 px-3 py-1 rounded-md border-2 border-darkGrayBg">
            {`<`} Previous
          </div>
          <div className="flex items-center gap-2">
            {numbers?.map((n, ind) => (
              <span
                className={`${
                  ind === 9 && "text-white bg-primary py-0.5 px-1.5 rounded-md"
                }`}
              >
                {ind + 1}
              </span>
            ))}
          </div>
          <div className="text-black/70 px-3 py-1 border-2 rounded-md border-darkGrayBg">
            Next {`>`}
          </div>
        </div>
      </div>
    </div>
  );
};
