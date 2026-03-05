import { useState } from 'react';

// Componentes
import QrcodeForm from './QrcodeForm';
import QrcodeView from './QrcodeView';

// Página principal do gerador de QR Code
// ----------------------------------------------------------------

export default function Home() {
	const [QRCodeText, setQRCodeText] = useState(''); // Estado para armazenar o link ou texto a ser convertido em QR Code

	// Função para lidar com o envio do formulário e geração do QR Code
	function handleSubmit(e) {
		const { text } = e || {};
		setQRCodeText(text);
	}

	return (
		<>
			<div className="container mx-auto">
				<div className="flex flex-wrap h-screen p-10 ">
					<QrcodeForm
						onSubmitForm={(e) => {
							handleSubmit(e);
						}}
					/>
					<QrcodeView text={QRCodeText} />
				</div>
			</div>
		</>
	);
}
