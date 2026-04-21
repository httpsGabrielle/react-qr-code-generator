import { useRef, useState } from 'react';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import Button from './Button';

export default function QrcodeGenerator({
	text,
	fgColor = '#00000',
	image,
	size = { width: 160, height: 160 },
	allowsDownload = true,
}) {
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
				className={`mx-auto p-2 rounded-md ${!text ? 'mx-auto bg-neutral-100 rounded-md p-1' : 'border-1 border-neutral-50  shadow '}`}
				style={{ minWidth: `${size.width}px`, minHeight: `${size.height}px` }}
			>
				{text && (
					<QRCodeCanvas
						value={text}
						size={QR_SIZE}
						fgColor={fgColor}
						marginSize={1}
						imageSettings={
							image && { src: URL.createObjectURL(image), height: 24, width: 24, opacity: 1, excavate: true }
						}
					/>
				)}
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
