import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllhabitsSearchBar from "./AllhabitsSearchbar";
import DarkMode from "./DarkMode";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { UserButton } from "@clerk/nextjs";
import { useGlobalContextProvider } from "@/app/contextApi";
import { useEffect } from "react";


function AllHabitsTopBar() {
  const {openSideBarObject}=useGlobalContextProvider;
  const {openSideBar,setOpenSideBar}=openSideBarObject;
  const userButtonAppearance={
    elements:{
      userButtonAvtarBox:"w-10 h-10",
      userButtonPopoverActionButton:"text-red-600"

    }
  }
  function openSideBarFunction(){
    setOpenSideBar(!openSideBar);

  }
  useEffect(()=>{
    function handleResize(){
      setOpenSideBar(false);
    }
    window.addEventListener("resize",handleResize);
    return()=>{
      window.removeEventListener("resize",handleResize)
    }

  },[]);
    return (
      <div className="bg-white p-5 rounded-md flex justify-between">
        <div className="flex gap-4">
          <div className="max-lg:flex hidden">
            <UserButton appearance={userButtonAppearance}/>

          </div>
        <div className="flex flex-col mx-md:hidden">
          <span className="text-xl">
            <span className="font-bold">hi there</span>
            <span className="font-light">,Sahil</span>
          </span>
          <span className="font-light text-[12px text-gray-400]">
              welcome back
          </span>
        </div>

        </div>
       
        <div className="w-[50%] flex gap-3 justify-between">
            <AllhabitsSearchBar/>
            <DarkMode/>
            <FontAwesomeIcon
            onClick={openSideBarFunction}
            className="m-2 max-xl:flex hidden mt-[13px] cursor-pointer"
            icon={faBars}
            />

        </div>

      </div>
    );
  }
  export default AllHabitsTopBar;