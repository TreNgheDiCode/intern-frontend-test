"use client";

import { categoriesOvertime } from "@/app/data/categories";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { format } from "date-fns";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const CategoryMasterChart = () => {
  const overtimeCategories = categoriesOvertime;
  overtimeCategories.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const chartData = overtimeCategories.map((item) => {
    const data: Record<string, string | number> = {
      date: format(item.date, "dd/MM/yyyy"),
    };

    item.categoryData.forEach((cat) => {
      data[cat.name] = cat.value;
      data[`fill`] = cat.fill;
    });

    return data;
  });

  console.log(chartData);

  return (
    <Card className="rounded-sm">
      <CardContent className="rounded-sm">
        <ChartContainer
          config={chartConfig}
          className="w-full [&_.recharts-cartesian-axis-tick_text]:font-semibold min-h-[250px]"
        >
          <LineChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid />
            <ChartLegend content={<ChartLegendContent />} />
            <XAxis
              tickMargin={10}
              dataKey="date"
              tickFormatter={(val: string) =>
                `${val.split("/")[0]}/${val.split("/")[1]}`
              }
            />
            <YAxis tickMargin={10} type="number" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />

            <Line
              dataKey="Danh mục A"
              name="Danh mục A"
              type="linear"
              stroke="#ff7300"
              strokeWidth={2}
            />
            <Line
              dataKey="Danh mục B"
              name="Danh mục B"
              type="linear"
              stroke="#82ca9d"
              strokeWidth={2}
            />
            <Line
              dataKey="Danh mục C"
              name="Danh mục C"
              type="linear"
              stroke="#ffc658"
              strokeWidth={2}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
