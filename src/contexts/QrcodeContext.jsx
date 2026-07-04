import { createContext, useContext, useState } from "react";

const QrcodeContext = createContext(null);

export function QrcodeProvider({ children }) {
  const [qrcodeData, setQrcodeData] = useState(null);

  return (
    <QrcodeContext.Provider value={{ qrcodeData, setQrcodeData }}>
      {children}
    </QrcodeContext.Provider>
  );
}

export function useQrcode() {
  const context = useContext(QrcodeContext);

  if (!context) {
    throw new Error("useQrcode deve ser usado dentro de um QrcodeProvider");
  }

  return context;
}
