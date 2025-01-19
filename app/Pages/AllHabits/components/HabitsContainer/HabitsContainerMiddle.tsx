import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { defaultColor } from "@/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function HabitsContainerMiddle() {
  return (
    <div className="border border-amber-700 p-3">
      <HabitCard />
      <HabitCard />
      <HabitCard />
      <HabitCard />
    </div>
  );
  


function HabitCard() {
  return (
    // Element for the whole Habit card
    <div className="flex p-3 items-center justify-between border">
      {/* The rounded checkbox */}
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        sx={{
          color: defaultColor.default,
          "&.Mui-checked": {
            color: defaultColor.default,
          },
        }}
      />
      <div className="flex justify-between gap-2 w-full p-3 py-4 rounded-md bg-slate-50 ">
        <div className=" w-full">
            <div className="flex gap-2 justify-between border ">
                <FontAwesomeIcon
                className="p-3 rounded-full w-4 h-4 bg-customRed text-while"
                height={20}
                width={20}
                icon={faCode}
                />
                <span className="">Coding</span>

            </div>

        </div>
        {/*Divs for the areas*/}
        <div className="flex gap-2 mt-2 border border-fuchsia-300">
            <div
            style={{backgroundColor:defaultColor[100]}}
            className="p-1 text-white text-[12px] rounded-md px-2"
            >
                <span className="text-customRed">Areal</span>
            </div>
        </div>
        {/*div for the three dors buttons */}
        <div className="w-10 flex items-center justify-center">
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </div>
        </div>
        </div>
  );
}
}


      

