"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChartNoAxesCombined, Sheet } from "lucide-react";
import { categories } from "../data/categories";
import { DayPicker } from "@/components/home/day-picker";
import { CategoryTable } from "@/components/home/category-table";
import { CategoryChangesTable } from "@/components/home/category-changes-table";
import { CategoryOvertimeTable } from "@/components/home/category-overtime-table";
import { CategoryMasterChart } from "@/components/home/charts/category-master-chart";

export default function ChartPage() {
  const lstCategory = categories;

  return (
    <div className="space-y-6 p-6 bg-neutral-300 flex flex-col">
      <Card>
        <CardContent className="p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Select>
              <SelectTrigger className="text-orange-500 rounded-md">
                <SelectValue placeholder="Tất cả danh mục" />
              </SelectTrigger>
              <SelectContent>
                {lstCategory.map((item, index) => (
                  <SelectItem
                    key={index}
                    value={item.id}
                    className="text-orange-500 focus:text-orange-800"
                  >
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <DayPicker />
            <Button className="rounded-md bg-orange-500 text-white uppercase hover:bg-orange-500/70">
              Tra cứu
            </Button>
          </div>
          <div className="items-center flex gap-2.5 cursor-pointer">
            <ChartNoAxesCombined className="size-8 text-orange-500" />
            <Sheet className="size-8 text-blue-950" />
          </div>
        </CardContent>
      </Card>
      <CategoryMasterChart />
      <CategoryOvertimeTable />
      <CategoryTable />
      <CategoryChangesTable />
    </div>
  );
}
