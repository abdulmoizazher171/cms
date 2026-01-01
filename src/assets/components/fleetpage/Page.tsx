
import Turbine from "./Turbine"
import Legend from "./Legend";
import TableContainer from "./TableContainer";



interface LegendProps {
    status: "healthy" | "activeWarnings" | "activeAlarms" | "offline" | "changeAlerts" | "instrumentaionsFaulty";
  }

interface TurbineProps {
    id: string;
    name: string;
    status: "healthy" | "activeWarnings" | "activeAlarms" | "offline" | "changeAlerts" | "instrumentaionsFaulty";
  }
 

const turbines: TurbineProps[] = [
  {
    id: "1",
    name: "North Ridge A1",
    status: "healthy",
  },
  {
    id: "2",
    name: "North Ridge A2",
    status: "activeWarnings",
  },
  {
    id: "3",
    name: "East Valley B1",
    status: "activeAlarms",
  },
  {
    id: "4",
    name: "East Valley B2",
    status: "offline",
  },
  {
    id: "5",
    name: "South Coast C1",
    status: "changeAlerts",
  },
  {
    id: "6",
    name: "South Coast C2",
    status: "instrumentaionsFaulty",
  },
  {
    id: "7",
    name: "West Peak D1",
    status: "healthy",
  },
  {
    id: "8",
    name: "West Peak D2",
    status: "activeWarnings",
  },
  {
    id: "9",
    name: "Offshore Blue E1",
    status: "healthy",
  },
  {
    id: "10",
    name: "Offshore Blue E2",
    status: "activeAlarms",
  },

  {
    id: "1",
    name: "North Ridge A1",
    status: "healthy",
  },
  {
    id: "2",
    name: "North Ridge A2",
    status: "activeWarnings",
  },
  {
    id: "3",
    name: "East Valley B1",
    status: "activeAlarms",
  },
  {
    id: "4",
    name: "East Valley B2",
    status: "offline",
  },
  {
    id: "5",
    name: "South Coast C1",
    status: "changeAlerts",
  },
  {
    id: "6",
    name: "South Coast C2",
    status: "instrumentaionsFaulty",
  },
  {
    id: "7",
    name: "West Peak D1",
    status: "healthy",
  },
  {
    id: "8",
    name: "West Peak D2",
    status: "activeWarnings",
  },
  {
    id: "9",
    name: "Offshore Blue E1",
    status: "healthy",
  },
  {
    id: "10",
    name: "Offshore Blue E2",
    status: "activeAlarms",
  },
];


const Legends: LegendProps[] = [
  { status: "healthy" },
  { status: "activeWarnings" },
  { status: "activeAlarms" },
  { status: "offline" },
  { status: "changeAlerts" },
  { status: "instrumentaionsFaulty" }
];


const Page = () => {
  return (
    <div className="flex align-items gap-4 w-full justify-items-start flex-wrap p-4">
        {turbines.map((turbine) => (
      <Turbine key={turbine.id} id={turbine.id}  status={turbine.status}></Turbine>))}
      <div className="flex flex-row gap-4 ml-8 justify-center w-full mt-6">
        {Legends.map((legendItem) => (
        
        <Legend status={legendItem.status} />
      ))}
      </div>
      <div className="w-full mt-10">
        <TableContainer />
      </div>
    </div>
  )
}

export default Page
