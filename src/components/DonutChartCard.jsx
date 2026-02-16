import { Card, CardContent, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

export default function DonutChartCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2" gutterBottom>
          Users by Country
        </Typography>
        <PieChart
          height={300}
          series={[
            {
              data: [
                { id: 0, value: 50, label: "India" },
                { id: 1, value: 35, label: "USA" },
                { id: 2, value: 15, label: "Brazil" },
              ],
            },
          ]}
        />
      </CardContent>
    </Card>
  );
}
