// import {
//   Card,
//   CardContent,
//   Command,
//   CommandInput,
//   Tooltip,
//   TooltipTrigger,
//   TooltipContent,
//   TooltipProvider,
//   CommandList,
// } from "@/components/ui";
import menuIcon from "../assets/menu.svg";
import helpIcon from "../assets/help.svg";
import groupIcon from "../assets/group.svg";
import searchIcon from "../assets/search.svg";

export function Header() {
  return (
    <div className="static top-0 z-10 rounded-none border-b md:sticky bg-card pt-2 bg-white shadow-cardShadow">
      <div className="flex flex-col items-center justify-between gap-4 px-8 py-3 md:flex-row md:gap-0 p-6 pt-0">
        <div className="flex items-center gap-4">
          <h2 className="text-[0.9375rem]">Payments</h2>
          <div className="flex items-center gap-1 group cursor-pointer">
            <img
              src={helpIcon}
              alt="help-icon"
              className="h-[14px] w-[14px] lg:inline"
            />
            <p className="text-xs">How it works</p>
            <p className="invisible absolute -left-16 top-8 py-0.5 px-2 rounded-sm bg-opacity-40 bg-black text-white text-xs group-hover:visible">
              Transaction fees are charged as a percentage of the order amount
              according to your plan.
            </p>
          </div>
        </div>

        <div className="flex items-center bg-darkGrayBg rounded-lg px-4 py-2 w-1/3">
          <img src={searchIcon} alt="search-icon" />
          <input
            placeholder="Search features, tutorials, etc."
            className="bg-darkGrayBg border-none focus:outline-none pl-2"
          />
        </div>

        <div className="flex gap-3">
          <button aria-label="Messages">
            <img src={groupIcon} alt="" className="h-10 w-10 lg:inline" />
          </button>
          <button aria-label="Menu">
            <img src={menuIcon} alt="" className="h-10 w-10 lg:inline" />
          </button>
        </div>
      </div>
    </div>
  );
}
