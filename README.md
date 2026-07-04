# QR Code Generator

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/MUI-9-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="Material UI" />
  <img src="https://img.shields.io/badge/React_Hook_Form-7-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form" />
  <img src="https://img.shields.io/badge/Zod-4-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod" />
  <img src="https://img.shields.io/badge/Vercel-deploy-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

Gerador de QR Code feito em React: configure o conteúdo, o tamanho, a margem e as cores, visualize o resultado em tempo real e baixe o QR Code em PNG.

## ✨ Funcionalidades

- 📝 Geração de QR Code a partir de qualquer texto ou URL (até 1000 caracteres)
- 📏 Tamanho ajustável (100px a 1000px)
- 🔳 Margem configurável
- 🎨 Cores personalizadas para o QR Code e para o fundo
- ✅ Validação do formulário com Zod + React Hook Form
- 💾 Download do QR Code em PNG

## 🛠️ Tecnologias

| Tecnologia | Uso |
| --- | --- |
| [React 19](https://react.dev/) | Biblioteca de UI |
| [Vite](https://vite.dev/) | Build e dev server |
| [Material UI](https://mui.com/) | Componentes e tema |
| [React Hook Form](https://react-hook-form.com/) | Gerenciamento do formulário |
| [Zod](https://zod.dev/) | Validação de schema |
| [qrcode.react](https://github.com/zpao/qrcode.react) | Renderização do QR Code |
| [React Router](https://reactrouter.com/) | Rotas |

## 🚀 Como rodar

```bash
# Clone o repositório
git clone https://github.com/httpsGabrielle/react-qr-code-generator.git
cd react-qr-code-generator

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run start
```

O app fica disponível em `http://localhost:5173`.

### Outros scripts

```bash
npm run build     # build de produção
npm run preview   # pré-visualiza o build
npm run lint      # roda o ESLint
```

## 📁 Estrutura

```
src/
├── components/
│   └── QrcodeComponents/
│       ├── QrcodeForm.jsx   # formulário de configuração
│       └── QrcodeView.jsx   # preview e download do QR Code
├── contexts/
│   └── QrcodeContext.jsx    # estado compartilhado do QR Code
├── layout/                  # layout base e header
├── pages/
│   └── QrcodePage/          # página principal
├── routes/                  # configuração de rotas
├── schemas/
│   └── qrcodeSchema.jsx     # schema de validação (Zod)
└── theme/                   # tema e design tokens (MUI)
```

---

Feito com 💜 por [Gabrielle Oliveira](https://github.com/httpsGabrielle)
