import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";

import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{ backgroundColor: "background.paper" }}
    >
      <Toolbar>
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
          <Box component="img" src={logo} alt="Logo" sx={{ height: 40 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Qrcode Generator
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
