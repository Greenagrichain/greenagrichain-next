"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomTable from "@/components/CustomTable";

import { toast } from "sonner";
import { cn } from "@/lib/utils";
import useSWR from "swr";
import { Label } from "@/components/ui/label";
import { FullLoader } from "@/components/Loader";

const depositFields = {
  id: {
    label: "ID",
    childrenClassName: "max-w-10 truncate",
  },
  userName: {
    label: "Username",
    render: (row, col) => `${row.user.firstname} ${row.user.lastname}`,
  },
  amount: {
    label: "Amount ($)",
  },
  currency: {
    label: "Currency",
  },
  walletAddress: {
    childrenClassName: "max-w-20 truncate",
    label: "Wallet",
  },
  status: {
    label: "Status",
    render: (row, col) => {
      let status = row[col].toUpperCase();
      return (
        <Badge
          className={cn(
            { "bg-green-800": status === "VERIFIED" },
            { "bg-cyan-600": status === "REVIEWING" },
            { "bg-yellow-600": status === "PENDING" }
          )}
        >
          {status}
        </Badge>
      );
    },
    childrenClassName: "min-w-4 last:text-center",
  },
  // actions: {
  //   label: "Action",
  //   render: (rowData) => (
  //     <Button size="icon" asChild>
  //       <Link
  //         href={{
  //           pathname: "/admin/users/user",
  //           query: rowData,
  //         }}
  //       >
  //         <IconEdit />
  //       </Link>
  //     </Button>
  //   ),
  // },
};

export default function DepositsTable({ actionSettings }) {
  const { data: deposits, isLoading, error } = useSWR("/api/deposits");
  const [filters, setFilters] = useState({
    filterText: "",
    filterBy: "",
    sortBy: "",
  });

  if (error) {
    toast.error("Error fetching users", {
      description: error.response ? error.response.data.message : error.message,
      id: "error",
    });
  }

  function filteredDeposits() {
    if (!deposits) return [];
    const { filterText, filterBy, sortBy } = filters;

    let fd = deposits.deposits.filter((deposit) => {
      let filterKey =
        !filterBy || filterBy === "all"
          ? Object.values(deposit).join("")
          : deposit[filterBy];
      return filterKey.toLowerCase().includes(filterText.toLowerCase());
    });

    if (sortBy && sortBy !== "none") {
      let sortByEnum = sortBy.split(" ");
      let orderMultiple = sortByEnum.pop() === "asc" ? 1 : -1;
      let sortKey = sortByEnum.join("");
      fd.sort((a, b) => {
        return (a[sortKey] > b[sortKey] ? 1 : -1) * orderMultiple;
      });
    }

    return fd;
  }
  let transformedDeposits = filteredDeposits();

  return (
    <div className="p-4">
      <div className="stats p-2 border rounded-lg">
        <p>
          Total Deposits:{" "}
          <span className="font-bold">{deposits?.deposits.length}</span>
        </p>
      </div>
      <div className="filter flex flex-wrap gap-4 *:w-min my-2 p-2 border rounded-lg">
        <Input
          value={filters.filterText}
          onChange={(e) =>
            setFilters((f) => ({ ...f, filterText: e.target.value }))
          }
          placeholder="Search..."
        />
        <div className="form-group flex gap-2 items-center">
          <Label htmlFor="filterBy" className="text-nowrap">
            Filter By:{" "}
          </Label>
          <Select
            value={filters.filterBy}
            id="filterBy"
            placeholder="Filter By"
            onValueChange={(val) =>
              setFilters((f) => ({ ...f, filterBy: val }))
            }
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Filter By" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Filter By</SelectLabel>
                <SelectItem value="all">All</SelectItem>
                {Object.keys(depositFields).map((field, _) => (
                  <SelectItem key={field + _} value={field}>
                    {depositFields[field].label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="form-group flex gap-2 items-center">
          <Label htmlFor="filterBy" className="text-nowrap">
            Sort By:{" "}
          </Label>
          <Select
            value={filters.sortBy}
            placeholder="Sort By"
            onValueChange={(val) => setFilters((f) => ({ ...f, sortBy: val }))}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort By</SelectLabel>
                <SelectItem value="none">None</SelectItem>

                {Object.keys(depositFields).map((field, _) => (
                  <div key={field + _}>
                    <SelectItem value={`${field} asc`}>
                      {depositFields[field].label} (ASC)
                    </SelectItem>
                    <SelectItem value={`${field} dsc`}>
                      {depositFields[field].label} (DSC)
                    </SelectItem>
                  </div>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <CustomTable
        title="Deposits"
        isLoading={isLoading}
        data={transformedDeposits}
        settings={{
          ...depositFields,
          actions: actionSettings,
        }}
      />
    </div>
  );
}
