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
import useSWR from "swr";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { IconEdit } from "@tabler/icons-react";

const userFields = {
  id: {
    label: "ID",
    childrenClassName: "max-w-10 truncate",
  },
  firstname: {
    label: "Firstname",
  },
  lastname: {
    label: "Lastname",
  },
  email: {
    label: "Email",
  },
  role: {
    label: "Role",
    render: (row, col) => {
      let role = row[col];
      return (
        <Badge
          className={cn(
            { "bg-green-800": role === "ADMIN" },
            { "bg-cyan-600": role === "USER" }
          )}
        >
          {role}
        </Badge>
      );
    },
    childrenClassName: "min-w-4 last:text-center",
  },
  edit: {
    label: "Action",
    render: (rowData) => (
      <Button size="icon" asChild>
        <Link
          href={{
            pathname: "/admin/users/user",
            query: rowData,
          }}
        >
          <IconEdit />
        </Link>
      </Button>
    ),
  },
};

export default function UsersOverview() {
  const { data: users, isLoading, error } = useSWR("/api/users");
  const [filters, setFilters] = useState({
    filterText: "",
    filterBy: "",
    sortBy: "",
  });

  if (error) {
    toast.error("Error fetching users", { description: error });
  }

  function filteredUsers() {
    if (!users) return [];
    const { filterText, filterBy, sortBy } = filters;

    let fu = users.filter((user) => {
      let filterKey =
        !filterBy || filterBy === "all"
          ? Object.values(user).join("")
          : user[filterBy];
      return filterKey.toLowerCase().includes(filterText.toLowerCase());
    });

    if (sortBy && sortBy !== "none") {
      let sortByEnum = sortBy.split(" ");
      let orderMultiple = sortByEnum.pop() === "asc" ? 1 : -1;
      let sortKey = sortByEnum.join("");
      fu.sort((a, b) => {
        return (a[sortKey] > b[sortKey] ? 1 : -1) * orderMultiple;
      });
    }

    return fu;
  }
  let transformedUsers = filteredUsers();

  return (
    <div className="p-4">
      <div className="stats p-2 border rounded-lg">
        <p>
          Total Users: <span className="font-bold">{users?.length}</span>
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
                {Object.keys(userFields).map((field, _) => (
                  <SelectItem key={field + _} value={field}>
                    {userFields[field].label}
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

                {Object.keys(userFields).map((field, _) => (
                  <div key={field + _}>
                    <SelectItem value={`${field} asc`}>
                      {userFields[field].label} (ASC)
                    </SelectItem>
                    <SelectItem value={`${field} dsc`}>
                      {userFields[field].label} (DSC)
                    </SelectItem>
                  </div>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <CustomTable
        title="Users"
        isLoading={isLoading}
        data={transformedUsers}
        settings={userFields}
      />
    </div>
  );
}
