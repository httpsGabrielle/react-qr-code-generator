import QrcodeGenerator from '../../components/QrcodeGenerator';

export default function QrcodeView(props) {
	return (
		<div className="h-min-screen flex-1 bg-neutral-50 rounded-xl drop-shadow-xs flex flex-col gap-5 items-center justify-center">
			<div className="w-100 h-min-screen bg-white rounded-md drop-shadow-sm p-5 flex flex-col justify-center items-center gap-5">
				<h2 className="text-md font-medium text-center">Baixar QR Code</h2>
				{/* Aqui ficará o QR Code gerado */}
				<QrcodeGenerator {...props} />
			</div>
		</div>
	);
}
