"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Rectangle,
  ReferenceLine,
  XAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";

export default function Withdrawal() {
  return (
    <div className="p-2 flex gap-2 flex-wrap bg-muted justify-center w-fit m-auto rounded-2xl">
      <WithdrawChart />
      <div className="flex flex-col p-4 gap-6">
        <div className="amount-balance">
          <p className="text-muted-foreground">Your current balance</p>
          <h3 className="text-7xl font-bold">$0.00</h3>
        </div>
        <div className="btn-group flex gap-2 flex-wrap">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="cursor-auto">
                <Button disabled>Withdraw</Button>
              </TooltipTrigger>
              <TooltipContent className="bg-slate-900 w-fit">
                <p>You need to invest more to meet requirements for withdraw</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button>
            <Link href="/transactions/deposit">Fund</Link>
          </Button>
          <Button variant="outline">
            <Link href="/transactions/investments">Invest</Link>
          </Button>
        </div>
        <Link href="/activities/all-history" className="underline">
          View full withdrawal history
        </Link>
      </div>
    </div>
  );
}

function WithdrawChart() {
  return (
    <Card className="withdraw-chart lg:max-w-md">
      <CardHeader className="space-y-0 pb-2">
        <CardDescription>This week</CardDescription>
        <CardTitle className="text-4xl tabular-nums">
          $0.00{" "}
          <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
            Funds withdrawed
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            steps: {
              label: "Amount",
              color: "hsl(var(--primary))",
            },
          }}
        >
          <BarChart
            accessibilityLayer
            margin={{
              left: -4,
              right: -4,
              top: 100,
            }}
            data={[
              {
                date: "2024-09-01",
                steps: 0.79,
              },
              {
                date: "2024-09-02",
                steps: 0.49,
              },
              {
                date: "2024-09-03",
                steps: 0.69,
              },
              {
                date: "2024-09-04",
                steps: 0.39,
              },
              {
                date: "2024-09-05",
                steps: 0.59,
              },
              {
                date: "2024-09-06",
                steps: 0.99,
              },
              {
                date: "2024-09-07",
                steps: 0.29,
              },
            ]}
          >
            <Bar
              dataKey="steps"
              fill="var(--color-steps)"
              radius={5}
              fillOpacity={0.6}
              activeBar={<Rectangle fillOpacity={0.8} />}
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  weekday: "short",
                });
              }}
            />
            <ChartTooltip
              defaultIndex={2}
              content={
                <ChartTooltipContent
                  hideIndicator
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    });
                  }}
                />
              }
              cursor={false}
            />
            <ReferenceLine
              y={1200}
              stroke="hsl(var(--muted-foreground))"
              strokeDasharray="3 3"
              strokeWidth={1}
            >
              <Label
                position="insideBottomLeft"
                value="Average Withdrawal"
                offset={10}
                fill="hsl(var(--foreground))"
              />
              <Label
                position="insideTopLeft"
                value="12,343"
                className="text-lg"
                fill="hsl(var(--foreground))"
                offset={10}
                startOffset={100}
              />
            </ReferenceLine>
            <CartesianGrid strokeDasharray="3 3" />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1">
        <CardDescription>
          Over the past 7 days, you have withdrew{" "}
          <span className="font-medium text-foreground"></span> 0.
        </CardDescription>
        <CardDescription>
          You need <span className="font-medium text-foreground">invest</span>{" "}
          in other to withdraw.
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
