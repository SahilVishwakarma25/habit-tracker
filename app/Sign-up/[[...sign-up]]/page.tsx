import { SignUp } from "@clerk/nextjs";
import react from "react";
export default function SignUpPage() {
    const defaultColor ="#d9029";
    const gradientColor =`linear-gradient(to bottom,${defaultColor},#ff0440)`;
  return (
    <div
       style={{ background: gradientColor }}
      className="flex justify-center items-center flex-col gap-10 w-full h-[10rem]"
    >
      <SignUp />
    </div>
  );
}
