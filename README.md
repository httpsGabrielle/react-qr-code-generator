# 📱 QR Code Generator

Aplicação web para gerar QR Codes de forma rápida e gratuita, com opção de download em PNG.

Este projeto foi construído com foco em uma experiência simples e objetiva: digitar um texto ou link, gerar o QR Code e baixar a imagem.

## ✨ Funcionalidades

- 🔗 Conversão de texto/URL em QR Code
- 🖼️ Visualização do QR Code na tela
- ⬇️ Download do QR Code em `.png`
- 🧩 Componentização com React
- 📱 Layout responsivo com Tailwind CSS

## 🛠️ Tecnologias e Bibliotecas

- ⚛️ `React 19`
- 🧭 `react-router-dom 7` (roteamento)
- 📦 `qrcode.react` (renderização do QR Code em canvas)
- 🎨 `Tailwind CSS 4` + `@tailwindcss/vite`
- ⚡ `Vite 7` (build e servidor de desenvolvimento)
- ✅ `ESLint 9` (padronização e qualidade de código)

## 🚀 Como Rodar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/httpsGabrielle/react-qr-code-generator.git
cd qr-code-generator
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar em desenvolvimento

```bash
npm run dev
```

Abra no navegador:

```text
http://localhost:5173
```

Observação: a rota inicial redireciona automaticamente para `/qrcode`.

### 4. Gerar build de produção

```bash
npm run build
```

### 5. Visualizar build local

```bash
npm run preview
```

## 📜 Scripts Disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento (Vite)
- `npm run build`: gera versão de produção
- `npm run preview`: sobe um servidor para testar o build
- `npm run lint`: executa validações com ESLint

## 🧠 Estrutura do Projeto

```text
src/
	App.jsx                      # Carrega o roteador principal
	main.jsx                     # Ponto de entrada da aplicação
	index.css                    # Import do Tailwind CSS
	components/
		Button.jsx                 # Botão reutilizável
		QrcodeGenerator.jsx        # Renderiza e permite baixar o QR Code
	layout/
		index.jsx                  # Layout base com <Outlet />
	pages/
		Home/
			index.jsx                # Página principal do gerador
			QrcodeForm.jsx           # Formulário de entrada do texto/link
			QrcodeView.jsx           # Área de visualização/baixar QR Code
	routes/
		index.jsx                  # Configuração de rotas
```

## ⚙️ Funções Principais

- `src/routes/index.jsx`
  - Define as rotas da aplicação.
  - Redireciona `/` para `/qrcode`.

- `src/pages/Home/index.jsx
  - Recebe o texto enviado pelo formulário.
  - Atualiza o estado `QRCodeText` para renderizar o QR Code.

- `src/pages/Home/QrcodeForm.jsx`
  - Coleta o valor digitado no input.
  - Dispara `onSubmitForm({ text })` para a página `Home`.

- `src/components/QrcodeGenerator.jsx`
  - Captura o canvas do QR Code.
  - Converte para Data URL (`image/png`).
  - Cria um link temporário e realiza o download do arquivo `qrcode.png`.

## 🔄 Fluxo de Uso

1. Usuário digita texto/URL no formulário.
2. Clique em **Gerar QR Code**.
3. O QR Code é exibido na lateral.
4. Clique em **Baixar QR Code** para salvar a imagem.

## 📌 Próximas Melhorias (Roadmap)

- 🎨 Personalização de cores do QR Code
- 🧷 Upload de logo no centro do QR
- 📏 Controle de tamanho e margem
- ✅ Validação de links e feedback de erro

## 👨‍💻 Autor

Projeto desenvolvido para compor portfólio pessoal, demonstrando:

- construção de interface com React
- gerenciamento de estado com hooks
- componentização e reaproveitamento
- integração com biblioteca de geração de QR Code
