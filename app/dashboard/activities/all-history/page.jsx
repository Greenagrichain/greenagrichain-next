"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const activities = ["Account", "Investment", "Deposit"];
export default function AllHistory() {
  const [currentActivity, setCurrentActivity] = useState("");

  return (
    <div>
      <h2 className="text-center text-xl font-bold">Activity History</h2>
      <div className="control-section p-2 flex justify-center">
        <Select
          value={currentActivity}
          onValueChange={setCurrentActivity}
          className=""
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select an activity" />
          </SelectTrigger>
          <SelectContent>
            {activities.map((activity, _) => (
              <SelectItem key={activity + _} value={activity}>
                {activity}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed py-20 m-2 shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            {currentActivity
              ? `You have no ${currentActivity} History`
              : "Select an activity to view"}
          </h3>
        </div>
      </div>
    </div>
  );
}
