"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

export interface Job {
  id: string;
  companyId: string;
  role: string;
  rating?: number;
  type: string;
  location: string;
  benefits?: string;
  description: string;
  salary?: number;
  hours?: number;
}

export const columns: ColumnDef<Job>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  { accessorKey: "companyName", header: "Company Name" },
  { accessorKey: "role", header: "Role" },
  { accessorKey: "type", header: "Type" },
  { accessorKey: "location", header: "Location" },
  { accessorKey: "rating", header: "Rating" },
];
