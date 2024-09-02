"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DepositHistory from "./DepositHistory";

const activities = {
  Deposits: <DepositHistory />,
};
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
            {Object.keys(activities).map((activity, _) => (
              <SelectItem key={activity + _} value={activity}>
                {activity}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {currentActivity ? (
        activities[currentActivity]
      ) : (
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed py-20 m-2 shadow-sm">
          <h3 className="text-2xl font-bold tracking-tight">
            Select an activity to view it&apos;s history
          </h3>
        </div>
      )}
    </div>
  );
}
