import react from "react";
import { faMoon, faSearch, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SignOutButton } from "@clerk/nextjs";
import AllHabitsTopBar from "./components/AllhabitsTopBar";
import HabitsContainer from "./components/HabitsContainer";
import HabitsCompleted from "./components/HabitsCompleted";
import AllHabitsRightSideBar from "./components/AllhabitsRightSideBar";
function AllHabits() {
  return (
    <div className="max-lg:flex-col max-lg:items-center w-full flex flex-row gap-0">
      <div className="w-[80%] m-5">
        <AllHabitsTopBar />
        <HabitsContainer/>
        <HabitsCompleted/>
      </div>
      <RightSideBar />
    </div>
  );
}

function RightSideBar(){
    return(
        <div className="w-[25%]  bg-white">
          <AllHabitsRightSideBar/>
        </div>
    )
}
export default AllHabits;
