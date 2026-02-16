import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import InsightsIcon from "@mui/icons-material/Insights";

export default function HighlightedCard() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={2}>
          <InsightsIcon color="primary" />
          <Typography variant="subtitle1">Explore your data</Typography>
          <Typography variant="body2" color="text.secondary">
            Uncover performance and visitor insights with our data wizardry.
          </Typography>
          <Button variant="contained" size="small">
            Get insights
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
