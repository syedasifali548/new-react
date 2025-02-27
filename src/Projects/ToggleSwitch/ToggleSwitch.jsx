import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";
import { PiUserSwitchFill } from "react-icons/pi";

export const ToggleSwitch = () => {
const[isOn,setIsOn] = useState(false)

const handleToggleSwitch=()=>{
    setIsOn(!isOn)
}  
const isCheckOn = isOn ? "on" : 'off';
const toggleBGcolor = {backgroundColor: isOn ? "#4caf50" : ""}
  return (
    <>
      <h1 style={{ color: "#000", textAlign: "center" }}>
      <PiUserSwitchFill/>
        Toggle Switch <IoIosSwitch/>
      </h1>
      <div
        className="toggle-switch"
        style={toggleBGcolor}
        onClick={handleToggleSwitch}
        >
        <div className={`switch ${isCheckOn}`}>
          <span className="switch-state">{isCheckOn}</span>
        </div>
      </div>
    </>
  );
};