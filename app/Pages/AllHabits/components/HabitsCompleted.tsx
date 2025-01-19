import { faCode } from "@fortawesome/free-solid-svg-icons"; // Fixed the typo in the import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Fixed the typo in the import
import { Checkbox, IconButton } from "@mui/material"; // Correct import for Checkbox and IconButton
import React from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked"; // Fixed formatting
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Fixed formatting
import { defaultColor } from "@/colors"; // Assumed this is a valid import
import MoreVertIcon from "@mui/icons-material/MoreVert";

function HabitsCompleted() {
  return (
    <div className="bg-white mt-7 p-8 rounded-md">
      <span className="font-bold text-lg mb-2">Habits Completed</span>
      <div className="mt-4 opacity-50">
        <HabitCard />
        <HabitCard />
      </div>
    </div>
  );
}

function HabitCard() {
  return (
    <div className="flex p-3 items-center justify-between">
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
      <div className="flex justify-between gap-2 w-full p-3 py-4 rounded-md bg-slate-50 border border-red-500">
        <div className=" w-full">
            <div className="flex gap-2 justify-between border">
              <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                className="p-3 rounded-full w-4 h-4 bg-customRed text-while"
                height={20}
                width={20}
                icon={faCode}
                />
                <span className="">Coding</span>

              </div>
                

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

export default HabitsCompleted;
