import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const mockData = [
  { month: "Jan", occupancy: 85, revenue: 45000 },
  { month: "Feb", occupancy: 88, revenue: 48000 },
  { month: "Mar", occupancy: 92, revenue: 52000 },
  { month: "Apr", occupancy: 90, revenue: 50000 },
  { month: "May", occupancy: 95, revenue: 55000 },
  { month: "Jun", occupancy: 93, revenue: 53000 },
];

const config = {
  occupancy: {
    label: "Occupancy Rate",
    theme: {
      light: "#818cf8",
      dark: "#818cf8",
    },
  },
  revenue: {
    label: "Monthly Revenue",
    theme: {
      light: "#6366f1",
      dark: "#6366f1",
    },
  },
};

export function PropertyAnalytics() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Property Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config} className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData}>
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" orientation="left" stroke="#818cf8" />
              <YAxis yAxisId="right" orientation="right" stroke="#6366f1" />
              <Bar
                dataKey="occupancy"
                yAxisId="left"
                fill="#818cf8"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="revenue"
                yAxisId="right"
                fill="#6366f1"
                radius={[4, 4, 0, 0]}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid gap-2">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-medium">{label}</span>
                          </div>
                          {payload.map((entry, index) => (
                            <div
                              key={`item-${index}`}
                              className="flex items-center justify-between gap-2"
                            >
                              <span className="text-muted-foreground">
                                {entry.name === "occupancy" ? "Occupancy Rate" : "Monthly Revenue"}:
                              </span>
                              <span className="font-medium">
                                {entry.name === "occupancy"
                                  ? `${entry.value}%`
                                  : `$${entry.value.toLocaleString()}`}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}