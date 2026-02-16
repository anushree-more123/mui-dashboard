import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BarChartCard() {
  const theme = useTheme();

  const colorPalette = [
    theme.palette.primary.dark,
    theme.palette.primary.main,
    theme.palette.primary.light,
  ];

  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          Page views and downloads
        </Typography>

        <Stack sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" alignItems="center" gap={1}>
            <Typography variant="h4">1.3M</Typography>
            <Chip size="small" color="error" label="-8%" />
          </Stack>

          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            Page views and downloads for the last 6 months
          </Typography>
        </Stack>

        <BarChart
          borderRadius={8}
          colors={colorPalette}
          xAxis={[
            {
              scaleType: "band",
              categoryGapRatio: 0.5,
              data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              height: 24,
            },
          ]}
          yAxis={[{ width: 50 }]}
          series={[
            {
              id: "page-views",
              data: [2234, 3872, 2998, 4125, 3357, 2789, 2998],
              stack: "A",
            },
            {
              id: "downloads",
              data: [3098, 4215, 2384, 2101, 4752, 3593, 2384],
              stack: "A",
            },
            {
              id: "conversions",
              data: [4051, 2275, 3129, 4693, 3904, 2038, 2275],
              stack: "A",
            },
          ]}
          height={250}
          margin={{ left: 0, right: 0, top: 20, bottom: 0 }}
          grid={{ horizontal: true }}
          hideLegend
        />
      </CardContent>
    </Card>
  );
}
