import { Card, CardContent, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

export default function AreaChartCard() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Sessions
        </Typography>

        <LineChart
          height={360}
          grid={{ horizontal: true }}
          series={[
            {
              data: [1000, 3000, 5000, 8000, 12000, 15000, 18000, 22000],
              area: true,
            },
            {
              data: [500, 1500, 3000, 4000, 6000, 8000, 10000, 14000],
              area: true,
            },
            {
              data: [200, 800, 1500, 2500, 3500, 4500, 5500, 6500],
              area: true,
            },
          ]}
          xAxis={[
            {
              scaleType: "point",
              data: [
                "Apr 1",
                "Apr 5",
                "Apr 10",
                "Apr 15",
                "Apr 20",
                "Apr 25",
                "Apr 30",
                "May 1",
              ],
            },
          ]}
        />
      </CardContent>
    </Card>
  );
}
