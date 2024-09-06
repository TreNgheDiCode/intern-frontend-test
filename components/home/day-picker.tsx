"use client"

import { DateRange } from "react-day-picker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Calendar } from "../ui/calendar";

export const DayPicker = () => {
  const [dateValue, setDateValue] = useState<DateRange | undefined>(undefined);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id="date"
          variant="outline"
          className={cn(
            "w-full justify-start rounded-md text-left font-normal text-orange-500 hover:text-orange-800",
            !dateValue && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {dateValue?.from ? (
            dateValue.to ? (
              <>
                {format(dateValue.from, "dd/MM/yyyy", {
                  locale: vi,
                })}{" "}
                - {format(dateValue.to, "dd/MM/yyyy", { locale: vi })}
              </>
            ) : (
              format(dateValue.from, "dd/MM/yyyy", { locale: vi })
            )
          ) : (
            <span>Chọn ngày</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={dateValue?.from}
          selected={dateValue}
          onSelect={setDateValue}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
};
