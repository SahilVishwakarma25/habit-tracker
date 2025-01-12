import react from "react";
import { faMoon, faSearch, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SignOutButton } from "@clerk/nextjs";

function AllHabits() {
  return (
    <div className="w-full flex">
      <div className="w-[80%] m-5">
        <AllHabitsTopBar />
      </div>
      <RightSideBar />
    </div>
  );
}
function AllHabitsTopBar() {
  return (
    <div className="flex gap-2 items-center ml-8 p-2 mt-8 hover:text-customRed transition-all ">
      <div className="flex flex-col">
        <span className="text-xl">
          <span className="font-bold">hi there</span>
          <span className="font-light">,Sahil</span>
        </span>
        <span className="font-light text-[12px text-gray-400]">
            welcome back
        </span>
      </div>
    </div>
  );
}
function RightSideBar(){
    return(
        <div className="w-[20%] bg-white"></div>
    )
}
export default AllHabits;
