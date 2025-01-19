import React from "react";  
import { useGlobalContexProvider } from "@/app/contextApi";
import { menuItemType } from "@/app/Types/MenuItemType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
export default function MenuSelection() {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems } = menuItemsObject;

  return (
    <div className="mt-[180px]">
      {menuItems.map((menuItem: menuItemType, menuItemIndex: number) => (
        <div key={menuItemIndex}>
          <SingleMenuItem menuItemProp={menuItem} />
        </div>
      ))}
    </div>
  );
}

function SingleMenuItem({ menuItemProp }: { menuItemProp: menuItemType }) {
  const { menuItemsObject } = useGlobalContextprovider();
  const {menuItems,setMenuItems}=menuItemsObject;
  function handleClickedItem(){
    const copyMenuItems=menuItems.map((menuItem=>{
      if(menuItemProp.name ===menuItem.name){
        return{...menuItem,isSelected:true};
      }
      return{...menuItem,isSelected:false};

    }))
    setMenuItems(copyMenuItems);
  }

  
  return (
    <div
      onClick={handleClickedItem}
      className={`flex gap-2 items-center p-2 mb-3 ml-8 cursor-pointer rounded-md w-36 ${
        menuItemProp.isSelected ? "bg-customRed  transition-all text-white" : "hover:text-customRed"
      }`}
    >
      <FontAwesomeIcon
        className=""
        icon={menuItemProp.icon}
        width={20}
        height={20}
      />
      <div>{menuItemProp.name}</div>
    </div>
  );
}