import { useState } from 'react';
import Button from '../../components/Button';

export default function Home({ onSubmitForm }) {
	const [text, setText] = useState(''); // # Estado para armazenar o link ou texto a ser convertido em QR Code

	// Função para lidar com o envio do formulário e geração do QR Code
	function handleSubmit() {
		// TO-DO: Implementar verificações antes de gerar o QR Code
		onSubmitForm({ text });
	}

	return (
		<div className="flex-1 h-full">
			<div className="w-md flex flex-col gap-5 justify-center h-full relative ">
				{/* Logo */}
				<div className="absolute top-10 left-0 flex items-center gap-3">
					<div className="bg-[url(./assets/images/logo.svg)] w-8 h-8 bg-cover bg-center"></div>
					<div>
						<h1 className="text-md font-mono font-bold">QR Code Generator</h1>
						<p className="text-xs text-neutral-500">Gerador de QR Code gratuito e fácil de usar</p>
					</div>
				</div>
				<span>
					<h1 className="text-2xl font-bold">Gerador de QR Code</h1>
					<p className="text-sm text-neutral-500">Configure e gere seu QR Code de forma totalmente gratuita</p>
				</span>

				{/* Link ou texto que será convertido em QR Code */}
				<div>
					<p className="text-sm text-neutral-500 font-medium">Insira o texto para gerar o QR Code:</p>
					<input
						type="text"
						className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Digite o texto aqui..."
						onChange={(e) => setText(e.target.value)}
					/>
				</div>

				{/* Botão para gerar o QR Code */}
				<Button
					onClick={() => {
						handleSubmit();
					}}
				>
					Gerar QR Code
				</Button>
			</div>
		</div>
	);
}
