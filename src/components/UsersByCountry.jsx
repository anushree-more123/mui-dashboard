import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  LinearProgress,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { id: 0, value: 50000, label: "India" },
  { id: 1, value: 35000, label: "USA" },
  { id: 2, value: 10000, label: "Brazil" },
  { id: 3, value: 5000, label: "Other" },
];

const countries = [
  { name: "India", value: 50 },
  { name: "USA", value: 35 },
  { name: "Brazil", value: 10 },
  { name: "Other", value: 5 },
];

export default function UsersByCountry() {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <Typography variant="subtitle2" sx={{ mb: 2 }}>
          Users by country
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <PieChart
            series={[
              {
                data,
                innerRadius: 70,
                outerRadius: 100,
                paddingAngle: 0,
                highlightScope: { highlight: "none", fade: "none" },
              },
            ]}
            height={200}
            width={200}
            colors={[
              "hsl(220,20%,65%)",
              "hsl(220,20%,45%)",
              "hsl(220,20%,35%)",
              "hsl(220,20%,25%)",
            ]}
            legend={{ hidden: true }}
            hideLegend
          />
        </Box>

        {countries.map((country, index) => (
          <Stack key={index} sx={{ mt: 2 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={1}
            >
              <Typography variant="body2" fontWeight={500}>
                {country.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {country.value}%
              </Typography>
            </Stack>

            <LinearProgress
              variant="determinate"
              value={country.value}
              sx={{
                height: 6,
                borderRadius: 5,
              }}
            />
          </Stack>
        ))}
      </CardContent>
    </Card>
  );
}
