import { faCode, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@mui/material";
import React from "react";
import ArrowCircleLeftOutlined  from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlined  from "@mui/icons-material/ArrowCircleRightOutlined";
import {darkModeColor, defaultColor } from "@/colors";
import { useGlobalContextProvider } from "@/app/contextApi";

export default function HabitsContainerTop() {
    const { darkModeObject } = useGlobalContextProvider();
    const { isDarkMode } = darkModeObject;
    return (
        <div className="p-3 flex justify-between items-center ">
            <div className=" flex gap-4 items-center ">
                <div>
                    <h2 className="font-bold text-lg">Sunday</h2>
                    <span className="font-light text-[12px] ">17 May 2024</span>
                </div>
                <div className="flex gap-1 m1-4">
                    <div className="text-customRed cursor-pointer">
                        <ArrowCircleLeftOutlined />
                    </div>
                    <div className="text-customRed cursor-pointer">
                        <ArrowCircleRightOutlined />
                    </div>
                </div>
                {/* */}
            </div>
            <button
            
                className="flex gap-2 items-center bg-customRed p-3 text-white
                rounded-md text-sm"
>

                <FontAwesomeIcon icon={faPlus} />
                <span>New Habit</span>
            </button>
            </div>  
    );
}