import { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Icon } from "@iconify/react";

import { Button, Paper, Stack, Typography } from "@mui/material";

import { useQrcode } from "../../contexts/QrcodeContext";

export default function QrcodeView() {
  const { qrcodeData } = useQrcode();
  const canvasRef = useRef(null);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "qrcode.png";
    link.click();
  };

  if (!qrcodeData) {
    return (
      <Stack
        spacing={1}
        sx={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          color: "text.secondary",
        }}
      >
        <Icon icon="mdi:qrcode-scan" width={48} />
        <Typography variant="body2">
          Preencha o formulário para gerar seu QR Code.
        </Typography>
      </Stack>
    );
  }

  return (
    <Stack
      spacing={3}
      sx={{ flex: 1, alignItems: "center", justifyContent: "center", p: 3 }}
    >
      <Paper
        elevation={2}
        sx={{ p: 3, borderRadius: 3, bgcolor: qrcodeData.background }}
      >
        <QRCodeCanvas
          ref={canvasRef}
          value={qrcodeData.text}
          size={qrcodeData.size}
          fgColor={qrcodeData.foreground}
          bgColor={qrcodeData.background}
          marginSize={qrcodeData.margin}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Paper>

      <Button
        variant="outlined"
        size="large"
        startIcon={<Icon icon="mdi:download" />}
        onClick={handleDownload}
      >
        Baixar PNG
      </Button>
    </Stack>
  );
}
