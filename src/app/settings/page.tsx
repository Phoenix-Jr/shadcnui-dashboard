"use client";
import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/ui/PageTitle";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type Props = {};
type Setting = {
  category: string;
  value: number | number | boolean;
};

export default function SettingsPage({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Settings" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

const columns: ColumnDef<Setting>[] = [
  { accessorKey: "category", header: "Category" },
  { accessorKey: "value", header: "Value" },
];

const data: Setting[] = [
  {
    category: "Account",
    value: true,
  },
  {
    category: "Notifications",
    value: false,
  },
  {
    category: "Language",
    value: "English",
  },
  {
    category: "Theme",
    value: "Dark",
  },
];
