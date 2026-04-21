import { useState } from 'react';
import Button from '../../components/Button';
import colors from 'tailwindcss/colors';

// Carrega as cores do Tailwind CSS para exibição no seletor de cores, filtrando apenas as cores mais atrativas
const tailwindColors = Object.entries(colors)
	.filter(([_, value], index) => typeof value === 'object' && value[500] && index >= 15)
	.map(([colorName, shades]) => shades[500])
	.reverse();

export default function Home({ onSubmitForm }) {
	const [text, setText] = useState(''); // # Estado para armazenar o link ou texto a ser convertido em QR Code
	const [fgColor, setFgColor] = useState('#000000'); // # Estado para armazenar a cor selecionada para o QR Code (opcional)
	const [image, setImage] = useState(''); // #

	const colorsOptions = [
		'#000000', // Preto (padrão)
		'#D4D4D4', // Cinza claro
		...tailwindColors, // Cores do Tailwind CSS
	];

	// Função para lidar com o envio do formulário e geração do QR Code
	function handleSubmit() {
		// TO-DO: Implementar verificações antes de gerar o QR Code
		onSubmitForm({ text, fgColor, image });
	}

	// Componente para pré-visualização das cores disponíveis
	const ColorPreview = ({ color, selected }) => {
		return (
			<div
				className={`p-1 rounded shadow cursor-pointer ${selected ? 'ring-1 ring-blue-200' : ''}`}
				onClick={() => setFgColor(color)}
			>
				<div className="w-6 h-6 rounded" style={{ backgroundColor: color }}></div>
			</div>
		);
	};

	return (
		<div className="flex-1 h-min-screen">
			<div className="w-100 flex flex-col gap-5 justify-center h-min-full ">
				{/* Logo */}
				<div className="flex items-center gap-3">
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

				{/* Cor para foreground/traços do QRCODE */}
				<div>
					<p className="text-sm text-neutral-500 font-medium">Cores:</p>
					<div className="flex flex-wrap gap-5">
						{colorsOptions.map((option, index) => (
							<ColorPreview key={index} color={option} selected={fgColor === option} />
						))}
					</div>
				</div>

				{/* Logo pra QR Code */}
				<div>
					<p className="text-sm text-neutral-500 font-medium mb-2">Imagem:</p>

					<label
						htmlFor="small-file-input"
						className="flex items-center justify-between gap-3 w-full p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50/40 transition"
					>
						<span className="text-sm text-neutral-600 truncate">
							{image?.name ? image.name : 'Escolha uma imagem para o centro do QR Code'}
						</span>
						<span className="text-sm font-medium px-2 py-1 rounded bg-blue-100 text-blue-700">Selecionar</span>
					</label>

					<input
						id="small-file-input"
						type="file"
						accept="image/*"
						className="hidden"
						onChange={(e) => setImage(e.target.files?.[0] || null)}
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
