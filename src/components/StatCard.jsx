import { useTheme } from "@mui/material/styles";
import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { areaElementClasses } from "@mui/x-charts/LineChart";

function AreaGradient({ color, id }) {
  return (
    <defs>
      <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity={0.3} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
}

export default function StatCard({ title, value, interval, trend, data }) {
  const theme = useTheme();

  const trendColor = {
    up: theme.palette.success.main,
    down: theme.palette.error.main,
    neutral: theme.palette.grey[500],
  };

  const chipColor = {
    up: "success",
    down: "error",
    neutral: "default",
  };

  const trendLabel = {
    up: "+25%",
    down: "-25%",
    neutral: "+5%",
  };

  const color = trendColor[trend];

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="subtitle2">{title}</Typography>

        <Stack direction="row" justifyContent="space-between" mt={1}>
          <Typography variant="h4">{value}</Typography>
          <Chip
            size="small"
            color={chipColor[trend]}
            label={trendLabel[trend]}
          />
        </Stack>

        <Typography variant="caption" color="text.secondary">
          {interval}
        </Typography>

        <Box sx={{ width: "100%", height: 40, mt: 2 }}>
          <SparkLineChart
            data={data}
            area
            showTooltip
            showHighlight
            color={color}
            sx={{
              [`& .${areaElementClasses.root}`]: {
                fill: `url(#gradient-${title})`,
              },
            }}
          >
            <AreaGradient color={color} id={`gradient-${title}`} />
          </SparkLineChart>
        </Box>
      </CardContent>
    </Card>
  );
}
