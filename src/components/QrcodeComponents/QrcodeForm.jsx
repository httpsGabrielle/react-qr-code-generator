import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";

import {
  Box,
  Button,
  Divider,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { qrcodeSchema } from "../../schemas/qrcodeSchema";

function ColorField({ label, value, onChange }) {
  return (
    <Stack spacing={0.75} sx={{ flex: 1 }}>
      <Typography variant="caption" sx={{ color: "text.secondary" }}>
        {label}
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          alignItems: "center",
          border: 1,
          borderColor: "divider",
          borderRadius: 1.5,
          p: 1,
          "&:hover": { borderColor: "text.secondary" },
        }}
      >
        <Box
          component="input"
          type="color"
          value={value}
          onChange={onChange}
          sx={{
            width: 26,
            height: 26,
            p: 0,
            border: "none",
            bgcolor: "transparent",
            cursor: "pointer",
            "&::-webkit-color-swatch-wrapper": { p: 0 },
            "&::-webkit-color-swatch": {
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "6px",
            },
          }}
        />
        <Typography variant="body2">{value.toUpperCase()}</Typography>
      </Stack>
    </Stack>
  );
}

function SliderField({ label, unit, field, ...sliderProps }) {
  return (
    <Stack spacing={0.5}>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {label}
        </Typography>
        <Typography variant="caption" sx={{ fontWeight: 600 }}>
          {field.value}
          {unit}
        </Typography>
      </Stack>
      <Slider
        size="small"
        value={field.value}
        onChange={(_, value) => field.onChange(value)}
        {...sliderProps}
      />
    </Stack>
  );
}

export default function QRCodeForm() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(qrcodeSchema),
    defaultValues: {
      text: "",
      size: 300,
      foreground: "#000000",
      background: "#ffffff",
      margin: 2,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Stack>
          <Typography variant="h6">Novo QR Code</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Configure o conteúdo e a aparência do seu QR Code.
          </Typography>
        </Stack>

        <Controller
          name="text"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              label="Conteúdo"
              placeholder="https://exemplo.com"
              multiline
              rows={4}
              {...field}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Divider />

        <Controller
          name="size"
          control={control}
          render={({ field }) => (
            <SliderField
              label="Tamanho"
              unit="px"
              field={field}
              min={100}
              max={1000}
              step={10}
            />
          )}
        />

        <Controller
          name="margin"
          control={control}
          render={({ field }) => (
            <SliderField
              label="Margem"
              unit=""
              field={field}
              min={0}
              max={20}
            />
          )}
        />

        <Stack direction="row" spacing={2}>
          <Controller
            name="foreground"
            control={control}
            render={({ field }) => (
              <ColorField
                label="Cor do QR Code"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          <Controller
            name="background"
            control={control}
            render={({ field }) => (
              <ColorField
                label="Cor de Fundo"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </Stack>

        <Button
          variant="contained"
          type="submit"
          size="large"
          startIcon={<Icon icon="mdi:qrcode" />}
        >
          Gerar QR Code
        </Button>
      </Stack>
    </Box>
  );
}
