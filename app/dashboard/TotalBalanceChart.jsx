"use client";

import { useState, useEffect } from "react";
import { Label, Pie, PieChart } from "recharts";

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

const chartConfig = {
  balance: {
    label: "Total Balance",
    color: "hsl(var(--chart-5))",
  },
};

export default function TotalBalanceChart({
  title = "$0.00",
  description = "Total balance",
  variant = "white",
  size = 250,
}) {
  const [chartData, setChartData] = useState([
    { balance: 100, fill: variant === "primary" ? "#92400e" : "#fff" },
    { balance: 1, fill: "transparent" },
  ]);

  useEffect(() => {
    let timerId = setTimeout(() => {
      let randomValue = Math.random() * 10;
      setChartData((pcd) => [
        {
          balance: randomValue,
          fill: variant === "primary" ? "#92400e" : "#fff",
        },
        { balance: 100, fill: "transparent" },
      ]);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [variant]);

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
      style={{ maxWidth: size, maxHeight: size }}
    >
      <PieChart width={size} height={size}>
        <Pie
          data={chartData}
          dataKey="balance"
          innerRadius={60}
          strokeWidth={5}
          startAngle={270}
        >
          {/* <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="!text-white"
                    style={{ color: "#fff !important" }}
                  >
                    {title}
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-white text-3xl font-bold"
                    ></tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="!text-white"
                    >
                      {description}
                    </tspan>
                  </text>
                );
              }
            }}
            position="center"
          ></Label> */}
          <Label
            style={{
              fill: variant === "primary" ? "#92400e" : "#fff",
              fontSize: 32,
            }}
            position="center"
          >
            {title}
          </Label>
        </Pie>
        <Pie
          data={[
            { complete: 100, fill: variant === "primary" ? "#92400e" : "#fff" },
          ]}
          dataKey="complete"
          strokeWidth={5}
          innerRadius={90}
        ></Pie>
      </PieChart>
    </ChartContainer>
  );
}
