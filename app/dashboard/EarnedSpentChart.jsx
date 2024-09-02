"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";

export const description = "A stacked area chart";

const chartDataInitial = [
  { month: "January", spent: Math.random() * 100, earned: Math.random() * 100 },
  {
    month: "February",
    spent: Math.random() * 100,
    earned: Math.random() * 100,
  },
  { month: "March", spent: Math.random() * 9, earned: Math.random() * 9 },
  { month: "April", spent: Math.random() * 4, earned: Math.random() * 4 },
  { month: "May", spent: Math.random() * 9, earned: Math.random() * 9 },
  { month: "June", spent: Math.random() * 4, earned: Math.random() * 4 },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentMonthIndex = new Date().getMonth();
for (let i = chartDataInitial.length - 1; i >= 0; i--) {
  currentMonthIndex += currentMonthIndex < 0 ? 12 : 0;
  chartDataInitial[i].month = months[currentMonthIndex];
  currentMonthIndex--;
}

const chartConfig = {
  spent: {
    label: "Spent",
    color: "hsl(var(--chart-1))",
    color: "red",
  },
  earned: {
    label: "Earned",
    color: "hsl(var(--chart-2))",
    color: "green",
  },
};

export default function EarnedSpentChart() {
  const [chartData, setChartData] = useState(chartDataInitial);
  const [refreshChart, setRefreshChart] = useState(true);

  useEffect(() => {
    let timerId = setTimeout(() => {
      setChartData((pcd) =>
        pcd.map(({ month }) => ({
          month,
          spent: Math.random(),
          earned: Math.random(),
        }))
      );
      setRefreshChart((prc) => !prc);
    }, 2000);

    return () => clearTimeout(timerId);
  }, [refreshChart]);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Investment Returns</CardTitle>
        <CardDescription>Earned / Spent Stats</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              //   left: 12,
              right: 12,
            }}
          >
            <CartesianGrid strokeDasharray={5} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis hide={true} domain={[0, 7]} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <defs>
              <linearGradient id="fillEarned" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0.5} />
              </linearGradient>
              <linearGradient id="fillSpent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Area
              dataKey="spent"
              type="natural"
              // fill="#ef4444"
              fill="url(#fillSpent)"
              fillOpacity={0.4}
              stroke="#ef4444"
              stackId="a"
            />
            <Area
              dataKey="earned"
              type="natural"
              // fill="#22c55e"
              fill="url(#fillEarned)"
              fillOpacity={0.4}
              stroke="#22c55e"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
