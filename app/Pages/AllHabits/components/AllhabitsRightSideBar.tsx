import React from "react";
import { defaultColor } from "@/colors";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import UserProfile from "./RightSideBar/UserProfile";
import MainStatistics from "./RightSideBar/MianStatistics";
import Calendar from "./RightSideBar/Calender";

function AllHabitsRightSideBar() {
  return (
    <div className=" flex flex-col items-center bg-white m-5 rounded-lg p-2 ">
      <UserProfile />
      <MainStatistics />
      <Calendar/>
    </div>
  );
}

export default AllHabitsRightSideBar;