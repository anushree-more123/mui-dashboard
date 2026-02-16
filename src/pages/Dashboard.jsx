import { Grid, Typography } from "@mui/material";
import DashboardLayout from "../layout/DashboardLayout";
import StatCard from "../components/StatCard";
import HighlightedCard from "../components/HighlightedCard";
import AreaChartCard from "../components/AreaChartCard";
import BarChartCard from "../components/BarChartCard";
import DetailsTable from "../components/DetailsTable";
import ProductTree from "../components/ProductTree";

export default function Dashboard({ toggleTheme }) {
  return (
    <DashboardLayout toggleTheme={toggleTheme}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Users"
            value="14k"
            interval="Last 30 days"
            trend="up"
            data={[200, 240, 220, 260, 240, 380, 300, 340, 360, 420, 600, 880]}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Conversions"
            value="325"
            interval="Last 30 days"
            trend="down"
            data={[600, 550, 500, 480, 460, 420, 400, 360, 300, 250]}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Event count"
            value="200k"
            interval="Last 30 days"
            trend="neutral"
            data={[500, 520, 510, 530, 520, 600, 530, 520, 510]}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <HighlightedCard />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} lg={8}>
          <AreaChartCard />
        </Grid>
        <Grid item xs={12} lg={4}>
          <BarChartCard />
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Details
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} lg={9}>
          <DetailsTable />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ProductTree />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
