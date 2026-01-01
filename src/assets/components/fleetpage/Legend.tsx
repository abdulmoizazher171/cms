import { cn } from "@/lib/utils"

interface LegendProps {
    status: "healthy" | "activeWarnings" | "activeAlarms" | "offline" | "changeAlerts" | "instrumentaionsFaulty";
  }

const Legend = ({ status }: LegendProps) => {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
    <div className={cn(" flex-col gap-2 border p-4 rounded-4xl shadow-md h-10 w-10" , { 
            "bg-gray-200": status === "offline" ,
            "bg-yellow-200": status === "activeWarnings" ,
            "bg-red-200": status === "activeAlarms" ,
            "bg-green-200": status === "healthy" ,
            "bg-blue-200": status === "changeAlerts" ,
            "bg-purple-200": status === "instrumentaionsFaulty" ,
        })}>
      
     
      
    </div>
    <h3 className="text-xl font-semibold mb-2">{status}</h3>
    </div>
  )
}

export default Legend 
