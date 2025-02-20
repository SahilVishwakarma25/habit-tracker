import { faCode } from "@fortawesome/free-solid-svg-icons"; // Fixed the typo in the import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Fixed the typo in the import
import { Checkbox, IconButton } from "@mui/material"; // Correct import for Checkbox and IconButton
import React from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked"; // Fixed formatting
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Fixed formatting
import { darkModeColor, defaultColor } from "@/colors"; // Assumed this is a valid import
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useGlobalContextProvider } from "@/app/contextApi";
import { dark } from "@mui/material/styles/createPalette";

function HabitsCompleted() {
  const {darkModeObject}=useGlobalContextProvider();
  const {isDarkMode}=darkModeObject;
  return (
    <div style={{
      color:isDarkMode? darkModeColor.textColor:defaultColor.textColor,
      backgroundColor:isDarkMode?darkModeColor.background:defaultColor.background,
    }}
    className="bg-white mt-7 p-8 rounded-md">
      <span className="font-bold text-lg mb-2">Habits Completed</span>
      <div className="mt-4 opacity-50">
        <HabitCard />
        <HabitCard />
      </div>
    </div>
  );
}

function HabitCard() {
  const {darkModeObject}=useGlobalContextProvider();
  const {isDarkMode}=darkModeObject;
  return (
    <div 
     className="flex p-3 items-center justify-between">
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
      <div style={
      {
        backgroundColor:isDarkMode? darkModeColor.backgroundSlate:defaultColor.backgroundSlate
      }
    }
      className="flex justify-between gap-2 w-full p-3 py-4 rounded-md bg-slate-50 ">
        <div className=" w-full">
            <div className="flex gap-2 justify-between ">
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
        <div className="flex gap-2 mt-2 ">
            
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
