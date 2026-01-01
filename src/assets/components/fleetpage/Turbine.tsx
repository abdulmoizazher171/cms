import { useState } from "react";
import { cn } from "../../utils/utils";

interface TurbineProps {
    id: string;
   
    status: "healthy" | "activeWarnings" | "activeAlarms" | "offline" | "changeAlerts" | "instrumentaionsFaulty";
  }


const Turbine = ({ id,  status }: TurbineProps) => {
  const [isHovered, setIsHovered] = useState(false);

  

 
  return (
    <button
        
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn("turbine-button" ,{ 
            "bg-gray-200": status === "offline" ,
            "bg-yellow-200": status === "activeWarnings" ,
            "bg-red-200": status === "activeAlarms" ,
            "bg-green-200": status === "healthy" ,
            "bg-blue-200": status === "changeAlerts" ,
            "bg-purple-200": status === "instrumentaionsFaulty" ,
        })}
      >
        <svg width="60" height="100" viewBox="0 0 100 120" >
          {/* Static Tower */}
          <path d="M48 110 L50 50 L52 110 Z" fill="#cbd5e1" />
          
          {/* Fan Group - This is what spins */}
          <g className={`fan-group ${isHovered ? "fast" : ""}`}>
            {/* Center-aligned blades */}
            <path d="M50 50 Q60 20 50 5 Q40 20 50 50" fill="#64748b" />
            <path d="M50 50 Q60 20 50 5 Q40 20 50 50" fill="#64748b" transform="rotate(120 50 50)" />
            <path d="M50 50 Q60 20 50 5 Q40 20 50 50" fill="#64748b" transform="rotate(240 50 50)" />
            
            {/* Hub */}
            <circle cx="50" cy="50" r="4" fill="#181a1d" />
          </g>
        </svg>
      
    <span className={cn(" text-gray-700")}>{id}</span>   
      </button>
  );
};


export default Turbine;