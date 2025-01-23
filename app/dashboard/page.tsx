"use client";
import react, { useEffect, useState } from "react";

import { useGlobalContextProvider } from "../contextApi";
import { menuItemType } from "../Types/MenuItemType";
import Areas from "../Pages/Areas/Areas";
import AllHabits from "../Pages/AllHabits/AllHabits";
import Statistics from "../Pages/Statistics/Statistics";
import Sidebar from "../Components/Sidebar/sidebar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { darkModeColor, defaultColor } from "@/colors";

function Dashboard() {
  const { menuItemsObject } = useGlobalContextProvider();
  const {darkModeObject}=useGlobalContextProvider();
  const {isDarkMode}=darkModeObject;
  const { menuItems } = menuItemsObject;
  const [selectedMenu, setSelectedMenu] = useState<menuItemType | null>(null);
  let selectComponent = null;
  useEffect(() => {
    menuItems.map((singleItem) => {
      if (singleItem.isSelected) {
        setSelectedMenu(singleItem);
      }
    });
  }, [menuItems]);
  switch (selectedMenu?.name) {
    case "All Habits":
      selectComponent = <AllHabits />;
      break;
    case "Areas":
      selectComponent = <Areas />;
      break;
    case "Statistics":
      selectComponent = <Statistics />;
      break;
    case "All Areas":
      break;
  }

  return (
    <div
    style={{
      backgroundColor:isDarkMode? darkModeColor.backgroundSlate:defaultColor.background
    }}
     className="flex bg-slate-50">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Sidebar />
        {selectComponent}
        <BlackSoftLayer/>
      </LocalizationProvider>
    </div>
  );
}
export default Dashboard;
function BlackSoftLayer(){
  const {openSideBarObject}=useGlobalContextProvider();
  const {openSideBar}=openSideBarObject;
  return(
    <div className={`w-full h-full bg-black fixed top-0 left-0 opacity-20 z-40 ${
    openSideBar?"fixed" :"hidden"
    }`}
    >

    </div>

  )
};
export {BlackSoftLayer};

