import { ColumnDef } from "@tanstack/react-table";

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
  { accessorKey: "companyName", header: "Company Name" },
  { accessorKey: "role", header: "Role" },
  { accessorKey: "type", header: "Type" },
  { accessorKey: "location", header: "Location" },
  { accessorKey: "rating", header: "Rating" },
];
