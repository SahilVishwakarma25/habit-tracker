import React from "react";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

function UserProfile() {
    const userButtonAppearance = {
        elements: {
            userButtonAvatarBox: "w-14 h-14", // Custom width and height
            userButtonPopoverActionButton: "text-red-600", // Custom text color for action buttons
        },
    };

    const { user } = useUser();

    return (
        <div className="max-lg:hidden flex flex-col gap-3 items-center justify-center mt-8 ">
            <UserButton appearance={userButtonAppearance} />
            <div>
                <span>{user?.fullName}</span>
            </div>
        </div>
    );
}

export default UserProfile;