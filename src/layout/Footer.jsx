import { Icon } from '@iconify/react';

export default function Footer() {
	// Função para lidar com redirecionamento para as redes sociais
	function handleRedirect(platform) {
		const urlMap = {
			github: 'https://github.com/httpsGabrielle',
			linkedin: 'https://www.linkedin.com/in/gabrielle040/',
			email: 'mailto:gabrielleso125@gmail.com',
		};
		window.open(urlMap[platform], '_blank');
	}

	return (
		<footer className="w-full bg-gray-200">
			<div className="mx-auto w-4/5 h-full flex  justify-between p-5">
				<div className="w-sm">
					<div className="flex items-center gap-3 mb-5">
						<div className="bg-[url(./assets/images/logo.svg)] w-8 h-8 bg-cover bg-center"></div>
						<div>
							<h1 className="text-md font-mono font-bold">QR Code Generator</h1>
							<p className="text-xs text-neutral-500">Gerador de QR Code gratuito e fácil de usar</p>
						</div>
					</div>
					<p className="text-sm text-neutral-500">
						Aplicação web desenvolvida com React e Vite para geração dinâmica de QR Codes, com personalização de cor,
						tamanho e exportação em PNG.
					</p>
				</div>
				<div>
					<p className="text-md font-bold text-neutral-600">Contato</p>
					<div className="flex gap-1 text-neutral-700 cursor-pointer">
						<Icon
							width="24px"
							icon="carbon:logo-github"
							onClick={() => {
								handleRedirect('github');
							}}
						/>
						<Icon
							width="24px"
							icon="carbon:logo-linkedin"
							onClick={() => {
								handleRedirect('linkedin');
							}}
						/>
						<Icon
							width="24px"
							icon="carbon:email"
							onClick={() => {
								handleRedirect('email');
							}}
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}
