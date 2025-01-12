
import AppIcon from "../svgIcon/appIcon";
import { defaultColor } from "@/colors";
function LogoAnName() {
    const backgroundColorObject = { backgroundColor: defaultColor };
  return (
    <div className="flex gap-2  items-center sm:justify-start justify-center">
      <span className="text-2xl font-light flex items-center gap-2">
        <div style={backgroundColorObject} className="p-2 rounded-md">
          <AppIcon color="#ffffff" height="34" width="34" />
        </div>
        {/*namen of the app*/}
        <span style={{ color: "#d90424" }} className="font-bold text-mainColor">
          habit
        </span>
        <span className="font-light ">tracker</span>
      </span>
    </div>
  );
}
export default LogoAnName;
