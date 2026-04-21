import { useState } from 'react';

// Componentes
import QrcodeForm from './QrcodeForm';
import QrcodeView from './QrcodeView';

// Página principal do gerador de QR Code
// ----------------------------------------------------------------

export default function Home() {
	const [design, setDesign] = useState({}); // # Estado para armazenar o design do QR Code a ser gerado

	// Função para lidar com o envio do formulário e geração do QR Code
	function handleSubmit(e) {
		setDesign(e || {});
	}

	return (
		<>
			<div className="container mx-auto">
				<div className="flex flex-wrap min-h-screen p-10 gap-3">
					<QrcodeForm
						onSubmitForm={(e) => {
							handleSubmit(e);
						}}
					/>
					<QrcodeView {...design} />
				</div>
			</div>
		</>
	);
}
