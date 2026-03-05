import { useRef, useState } from 'react';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import Button from './Button';

export default function QrcodeGenerator({ text, size = { width: 160, height: 160 }, allowsDownload = true }) {
	const qrRef = useRef();

	function handleDownload() {
		const canvas = qrRef.current.querySelector('canvas');
		const url = canvas.toDataURL('image/png');
		const link = document.createElement('a');
		link.href = url;
		link.download = 'qrcode.png';
		link.click();
	}

	const QR_SIZE = (size?.width || size?.height) - 8; // Subtrai 8px para considerar o padding do container

	return (
		<>
			<div
				ref={qrRef}
				className="mx-auto bg-neutral-100 rounded-md p-1"
				style={{ width: `${size.width}px`, height: `${size.height}px` }}
			>
				{text && <QRCodeCanvas value={text} size={QR_SIZE} />}
			</div>

			<Button
				fullWidth
				disabled={!allowsDownload || !text}
				onClick={() => {
					handleDownload();
				}}
			>
				Baixar QR Code
			</Button>
		</>
	);
}
