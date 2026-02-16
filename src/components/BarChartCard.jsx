import { Card, CardContent, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BarChartCard() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Page views and downloads
        </Typography>

        <BarChart
          height={360}
          colors={["#1f4fd8", "#3b82f6", "#93c5fd"]}
          series={[
            { data: [2000, 3000, 2500, 4000, 3500, 2800, 3000], stack: "A" },
            { data: [3000, 5000, 4000, 6000, 7000, 4500, 5200], stack: "A" },
            { data: [4000, 2000, 3000, 1000, 1500, 2000, 1000], stack: "A" },
          ]}
          xAxis={[
            {
              scaleType: "band",
              data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            },
          ]}
        />
      </CardContent>
    </Card>
  );
}
