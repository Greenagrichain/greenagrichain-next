"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
import { useState, useEffect } from "react";

const chartDataInitial = [
  { month: "January", transactions: Math.random() * 10 },
  { month: "February", transactions: Math.random() * 10 },
  { month: "March", transactions: Math.random() * 10 },
  { month: "April", transactions: Math.random() * 10 },
  { month: "May", transactions: Math.random() * 10 },
  { month: "June", transactions: Math.random() * 10 },
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
  transactions: {
    label: "Transactions",
    color: "hsl(var(--chart-1))",
  },
};

export function TransactionsChart() {
  const [chartData, setChartData] = useState(chartDataInitial);
  const [refreshChart, setRefreshChart] = useState(true);

  useEffect(() => {
    let timerId = setTimeout(() => {
      setChartData((pcd) =>
        pcd.map(({ month }) => ({
          month,
          transactions: Math.random(),
        }))
      );
      setRefreshChart((prc) => !prc);
    }, 2000);

    return () => clearTimeout(timerId);
  }, [refreshChart]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Net Money Value</CardTitle>
        <CardDescription>Last few months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis hide={true} domain={[0, 7]} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar
              dataKey="transactions"
              fill="var(--color-desktop)"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 0.2% this month <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
