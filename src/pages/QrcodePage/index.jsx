import { Paper, Stack } from "@mui/material";

// Componentes
import QrcodeForm from "../../components/QrcodeComponents/QrcodeForm";
import QrcodeView from "../../components/QrcodeComponents/QrcodeView";

// Contexts
import { QrcodeProvider } from "../../contexts/QrcodeContext";

export default function QrcodePage() {
  return (
    <QrcodeProvider>
      <Stack direction="row" sx={{ flexGrow: 1, height: "100%" }}>
        {/* Navbar Lateral */}
        <Stack
          as={Paper}
          elevation={1}
          sx={{ p: 3, width: "20vw", height: "100%" }}
        >
          <QrcodeForm />
        </Stack>

        {/* Conteúdo */}
        <Stack sx={{ flex: 1 }}>
          <QrcodeView />
        </Stack>
      </Stack>
    </QrcodeProvider>
  );
}
