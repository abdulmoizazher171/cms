import { columns, type WarningData } from "./Columns"
import { DataTable } from "./Datatable"





const TableContainer = () => {
    const warningSamples: WarningData[] = [
    {
        WTG: "WTG-001",
        severity: "Critical",
        mesausrement: "Bearing Temp: 98°C",
        machine: "Generator",
        location: "Nacelle - Drive End",
        endtereddate: "2025-12-30T08:15:00Z",
        leftdate: "2025-12-30T14:30:00Z",
        recommendation: "Emergency shutdown and cooling circuit inspection.",
        Actiontake: "Replaced faulty coolant pump and flushed heat exchanger."
    },
    {
        WTG: "WTG-042",
        severity: "High",
        mesausrement: "Vibration: 5.8mm/s",
        machine: "Main Gearbox",
        location: "Internal - Planet Carrier",
        endtereddate: "2026-01-01T10:00:00Z",
        leftdate: "",
        recommendation: "Schedule borescope inspection of gear teeth.",
        Actiontake: "Warning acknowledged; technician dispatched for site visit."
    },
    {
        WTG: "WTG-088",
        severity: "Medium",
        mesausrement: "Yaw Deviation: 12°",
        machine: "Yaw System",
        location: "Tower Top",
        endtereddate: "2025-12-28T19:45:00Z",
        leftdate: "2025-12-29T02:00:00Z",
        recommendation: "Calibrate wind vane and check yaw motor torque.",
        Actiontake: "Recalibrated ultrasonic wind sensor and tested yaw brakes."
    },
    {
        WTG: "WTG-105",
        severity: "Low",
        mesausrement: "Oil Level: 15%",
        machine: "Hydraulic Unit",
        location: "Base / Tower Bottom",
        endtereddate: "2025-12-20T07:00:00Z",
        leftdate: "2025-12-20T09:00:00Z",
        recommendation: "Top up hydraulic fluid during next scheduled maintenance.",
        Actiontake: "Fluid refilled to 90% capacity; leak test performed."
    },
    {
        WTG: "WTG-012",
        severity: "High",
        mesausrement: "Insulation Resistance: 0.2MΩ",
        machine: "Transformer",
        location: "Grid Connection Point",
        endtereddate: "2025-12-31T23:50:00Z",
        leftdate: "",
        recommendation: "Immediate isolation to prevent arc flash risk.",
        Actiontake: "Turbine manually braked and disconnected from grid."
    }
];



  return (
    <div>
      <div className=" py-10 w-fill">
      <DataTable columns={columns} data={warningSamples} />
    </div>
    </div>
  )
}

export default TableContainer
