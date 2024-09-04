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
import { FullLoader } from "./Loader";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function CustomTable({
  data = [],
  settings = {},
  title = "Record",
  isLoading,
}) {
  if (!data || !data.length || isLoading)
    return (
      <div className="relative rounded-lg border border-dashed p-6 m-2 shadow-sm flex justify-center items-center">
        {isLoading ? (
          <FullLoader loaderClassName="w-6 h-6" />
        ) : (
          <p className="text-lg">
            No <span className="italic underline">{title}</span> Found
          </p>
        )}
      </div>
    );

  return (
    <div className="rounded-lg border border-dashed p-2 m-2 shadow-sm">
      <p className="text-center text-2xl mb-2">{title}</p>
      <Separator />
      <ScrollArea className="max-w-[900px] max-h-[900px] mx-auto">
        <Table className="">
          <TableCaption className="">{title}</TableCaption>
          <TableHeader>
            <TableRow>
              {Object.values(settings).map((th, _) => (
                <TableHead
                  key={th.label + _}
                  className={cn(
                    "border-x text-center first:text-left",
                    th.className
                  )}
                >
                  {th.label || "DATA"}
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
                      {render ? render(row, col) : row[col]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
}
