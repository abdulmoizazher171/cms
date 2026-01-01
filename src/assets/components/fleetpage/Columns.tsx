"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";




export type WarningData = {
    WTG: string;
    severity: string;
    mesausrement: string;
    machine: string;
    location: string;
    endtereddate: string;
    leftdate: string;
    recommendation: string;
    Actiontake: string;
};


const severityOrder: Record<string, number> = {
  Critical: 4,
  High: 3,
  Medium: 2,
  Low: 1,
};

export const columns: ColumnDef<WarningData>[] = [

    {
        header: "SR NO",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "WTG",
        header: "WTG",
        cell: info => info.getValue(),
    },

    {
        accessorKey: "severity",
        header: ({ column }) => {
  return (
    <Button className="hover:bg-transparent hover:text-white"
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      Severity
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  )},

  sortingFn: (rowA, rowB, columnId) => {
                const a = severityOrder[rowA.getValue(columnId) as string] || 0;
                const b = severityOrder[rowB.getValue(columnId) as string] || 0;
                return a - b;
            },
        cell: ({ getValue }) => {
            const value = getValue() as string;

            
           
            const styles: Record<string, string> = {
                Critical: "text-red-600  font-bold",
                High: "text-orange-600  font-bold",
                Medium: "text-yellow-500 font-medium",
                Low: "text-green-600  font-normal",
            };

            const className = styles[value] || "bg-gray-100";

            return (

                <div className={cn(" h-full w-full ", className)}>
                    {value}
                </div>
            );
        }


    }

    ,
    {
        accessorKey: "mesausrement",
        header: "Measurement",
        cell: info => info.getValue(),
    },
    {
        accessorKey: "machine",
        header: "Machine",
        cell: info => info.getValue(),
    },
    {
        accessorKey: "location",
        header: "Location",
        cell: info => info.getValue(),
    },
    {
        accessorKey: "endtereddate",
        header: "Entered Date",
        cell: info => info.getValue(),
    },
    {
        accessorKey: "leftdate",
        header: "Left Date",
        cell: info => info.getValue(),
    },
    {
        accessorKey: "recommendation",
        header: "Recommendation",
        cell: ({ row, getValue }) => {
            const severity = row.original.severity; // Access the severity from the same row
            const recommendation = getValue() as string;

            const styles: Record<string, string> = {
                Critical: "text-red-600 font-bold",
                High: "text-orange-600 font-bold",
                Medium: "text-yellow-500 font-medium",
                Low: "text-green-600 font-normal",
            };

            const bgColor = styles[severity] || "bg-transparent";

            return (
                <div className={cn("w-full h-full ", bgColor)}>
                    {recommendation}
                </div>
            );
        },


    },
    {
        accessorKey: "Actiontake",
        header: "Action Taken",
        cell: info => info.getValue(),
    },
];
