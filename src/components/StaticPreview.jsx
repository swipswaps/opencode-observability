import {
  AppBar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import TimelineIcon from "@mui/icons-material/Timeline";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const SHOTS = [
  {
    src: "status-mui-desktop.png",
    title: "Overview · live data",
    desc: "Cost, token mix, 14-day trend, health findings, and recent sessions.",
  },
  {
    src: "status-mui-activity-desktop.png",
    title: "Activity timeline · now/rel. dur",
    desc: "Newest-first rows with the axis, duration bars, detail, and actions.",
  },
  {
    src: "status-mui-mobile.png",
    title: "Android overview",
    desc: "390 px layout, bottom navigation, safe-area spacing, and installable PWA.",
  },
  {
    src: "status-mui-activity.png",
    title: "Android activity",
    desc: "Step rows hidden by default; filters, search, and per-row copy.",
  },
];

export default function StaticPreview({ mode, onToggleMode }) {
  const base = import.meta.env.BASE_URL;
  return (
    <>
      <AppBar position="fixed" color="inherit" sx={{ bgcolor: "background.paper" }}>
        <Toolbar sx={{ gap: 1 }}>
          <Box sx={{ width: 30, height: 30, borderRadius: 1.5, bgcolor: "primary.main", display: "grid", placeItems: "center" }}>
            <TimelineIcon sx={{ fontSize: 19, color: "#0d1117" }} />
          </Box>
          <Typography variant="h6" sx={{ letterSpacing: "-.02em" }}>
            observability
          </Typography>
          <Chip size="small" color="info" label="screenshot preview" />
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title={mode === "dark" ? "Switch to light theme" : "Switch to dark theme"}>
            <IconButton aria-label="Toggle light or dark theme" onClick={onToggleMode}>
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ pt: { xs: "64px", md: "72px" }, pb: 5, minHeight: "100vh", bgcolor: "background.default" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 3 } }}>
          <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "center" }} spacing={1} sx={{ py: 3 }}>
            <Box>
              <Typography variant="h4">opencode observability</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 760 }}>
                This GitHub Pages build is a static preview. The live app connects to the local
                OpenCode/DeepSeek API at <code>https://10.100.0.24:5099/app/</code>. The screenshots
                below were captured from that real UI; no synthetic metrics or placeholder session data.
              </Typography>
            </Box>
            <Chip size="small" color="warning" variant="outlined" label="No live API on this host" />
          </Stack>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: 2 }}>
            {SHOTS.map((s) => (
              <Card key={s.src}>
                <Box
                  component="a"
                  href={`${base}screenshots/${s.src}`}
                  target="_blank"
                  rel="noopener"
                  sx={{ display: "block", bgcolor: "action.hover" }}
                >
                  <Box
                    component="img"
                    src={`${base}screenshots/${s.src}`}
                    alt={s.title}
                    sx={{ display: "block", width: "100%", height: "auto" }}
                  />
                </Box>
                <CardContent sx={{ p: 1.5, "&:last-child": { pb: 1.5 } }}>
                  <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                    <Typography variant="h6">{s.title}</Typography>
                    <IconButton size="small" component="a" href={`${base}screenshots/${s.src}`} target="_blank" rel="noopener" aria-label={`Open ${s.title}`}>
                      <OpenInNewIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">{s.desc}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          <Typography variant="caption" color="text.secondary" component="div" sx={{ mt: 3 }}>
            Source: <a href="https://github.com/swipswaps/opencode-observability">swipswaps/opencode-observability</a>
            {" · "}
            Captured from the local app; no API calls are made by this preview.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
