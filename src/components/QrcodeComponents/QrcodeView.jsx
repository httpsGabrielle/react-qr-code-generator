import { useQrcode } from "../../contexts/QrcodeContext";

export default function QrcodeView() {
  const { qrcodeData } = useQrcode();

  if (!qrcodeData) return <></>;

  return <></>;
}
