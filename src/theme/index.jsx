import { createTheme } from "@mui/material/styles";

// Design
import palette from "./design/palette";
import shadows from "./design/shadows";
import typography from "./design/typography";

// Tema central do MUI. Ajuste paleta, tipografia e overrides conforme a marca.
const theme = createTheme({
  palette,
  shadows: shadows(),
  typography,
});

export default theme;
