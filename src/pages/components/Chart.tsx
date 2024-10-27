import { Area, AreaChart, CartesianGrid } from "recharts";

import { Card, CardContent } from "@/components/atoms/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/atoms/chart";
import { cn } from "@/shared/lib/utils";
import { PiStarOfDavid } from "react-icons/pi";

export const description = "A simple area chart";

const chartData = [
  {
    tier: "Tier 1",
    value: 5,
    label: "F0 (Rebate): 5%",
    color1: "#A0A0A0",
    color2: "#D0D0D0",
  },
  {
    tier: "Tier 2",
    value: 10,
    label: "F1 (Commission): 35%",
    color1: "#4CAF50",
    color2: "#A8E6A2",
  },
  {
    tier: "Tier 3",
    value: 20,
    label: "F2 (Commission): 10%",
    color1: "#2196F3",
    color2: "#6EC4FA",
  },
  { tier: "Tier 4", value: 35, color1: "#FFC107", color2: "#FFD75F" },
  { tier: "Tier 5", value: 55, color1: "#9C27B0", color2: "#D28DE2" },
  { tier: "Tier 6", value: 80, color1: "#FF5722", color2: "#FF8A50" },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <Card className="py-10 bg-transparent border-none">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 20,
              right: 12,
            }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--chart-1))"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--chart-1))"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />

            <ChartTooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-transparent rounded-lg  p-2 shadow-sm shadow-white">
                      <p
                        className="font-semibold"
                        style={{ color: data.color }}
                      >
                        {data.tier}
                      </p>
                      <p>{data.label || `Value: ${data.value}`}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              dataKey="value"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.1}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
        <div className="flex justify-between">
          {chartData.map((item, index) => (
            <div
              className="relative mt-2 ml-1 flex flex-col justify-center items-center"
              key={index}
            >
              <div
                className={cn(
                  "size-10 md:size-10 lg:size-12 rounded-full flex justify-center items-center border-2",
                  `border-[${item.color2}]`
                )}
                style={{
                  background: `linear-gradient(to bottom, ${item.color1}, ${item.color2})`,
                }}
              >
                <PiStarOfDavid className="size-6 md:size-8 lg:size-10" />
                <p
                  className="absolute text-sm font-bold rounded-full flex items-center justify-center  text-white size-4 md:size-5 lg:size-7 "
                  style={{
                    background: `linear-gradient(to bottom, ${item.color1}, ${item.color2})`,
                  }}
                >
                  {" "}
                  {item.tier.slice(-1)}
                </p>
              </div>
              <p className="text-xs">{item.tier}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
