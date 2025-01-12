import react from "react";
export default function HeroSection() {
  return (
    <div className="flex flex-col mx-16 items-center mt-[100px] gap-6 ">
      <span className="font-bold text-3xl text-center">
        Build the habit thats <span className="text-customRed">Mattars!</span>
      </span>
      <p className="text-center text-sm sm:w-[430px] w-[370px]">
        Feeling overwhelmed? Our easy-to-use habit tracker helps you take
        control of your day and achieve your goals.
      </p>
      <button
        className={`block text-sm font-light rounded-lg px-4 py-3 text-white bg-customRed
          focus:outline-none `} type="button"
      >
       {`lets's get started`}
      </button>
    </div>
  );
}
