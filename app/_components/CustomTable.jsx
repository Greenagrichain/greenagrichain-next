"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default function CustomTable({
  data = [],
  settings = {},
  title = "Record",
}) {
  if (!data || !data.length)
    return (
      <div className="rounded-lg border border-dashed p-2 m-2 shadow-sm flex justify-center items-center">
        <p className="text-lg">
          No <span className="italic underline">{title}</span> Found
        </p>
      </div>
    );
  return (
    <div className="rounded-lg border border-dashed p-2 m-2 shadow-sm">
      <Table className="w-full">
        <TableCaption className="caption-top text-xl mb-2">
          {title}
        </TableCaption>
        <TableHeader>
          <TableRow>
            {Object.values(settings).map((th) => (
              <TableHead
                key={th.label}
                className={cn(
                  "border-x text-center first:text-left",
                  th.className
                )}
              >
                {th.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {Object.keys(settings).map((col) => {
                const { render } = settings[col];

                return (
                  <TableCell
                    key={row.id + col}
                    className={cn(
                      "border-x first:text-left text-center",
                      settings[col].childrenClassName
                    )}
                  >
                    {render ? render(row[col]) : row[col]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
