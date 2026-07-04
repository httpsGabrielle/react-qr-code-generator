import palette from "./palette";

export function remToPx(value) {
	return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
	return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }) {
	return {
		"@media (min-width:0px)": {
			fontSize: pxToRem(sm),
		},
		"@media (min-width:900px)": {
			fontSize: pxToRem(md),
		},
		"@media (min-width:1200px)": {
			fontSize: pxToRem(lg),
		},
	};
}

const typography = {
	fontFamily: "Inter, sans-serif",
	fontWeightRegular: 400,
	fontWeightMedium: 500,
	fontWeightBold: 600,
	h1: {
		fontWeight: 700,
		lineHeight: 80 / 64,
		fontSize: pxToRem(24),
		...responsiveFontSizes({ sm: 18, md: 24, lg: 24 }),
	},
	h2: {
		fontWeight: 600,
		fontSize: pxToRem(22),
		...responsiveFontSizes({ sm: 16, md: 22, lg: 22 }),
	},
	h3: {
		fontWeight: 600,
		lineHeight: 1.5,
		fontSize: pxToRem(20),
		...responsiveFontSizes({ sm: 14, md: 20, lg: 20 }),
	},
	h4: {
		fontWeight: 500,
		lineHeight: 1.5,
		fontSize: pxToRem(20),
		...responsiveFontSizes({ sm: 14, md: 20, lg: 20 }),
	},
	h5: {
		fontWeight: 500,
		lineHeight: 1.5,
		fontSize: pxToRem(18),
		...responsiveFontSizes({ sm: 14, md: 18, lg: 18 }),
	},
	h6: {
		fontWeight: 400,
		lineHeight: 1.5,
		fontSize: pxToRem(18),
		...responsiveFontSizes({ sm: 14, md: 18, lg: 18 }),
	},
	subtitle1: {
		fontWeight: 400,
		color: palette.grey[600],
		fontSize: pxToRem(14),
	},
	subtitle2: {
		fontWeight: 500,
		fontSize: pxToRem(16),
	},
	menu: {
		fontWeight: 600,
		color: palette.grey[600],
		fontSize: pxToRem(12),
	},
	button: {
		fontWeight: 500,
		lineHeight: 1.7,
		fontSize: pxToRem(14),
		textTransform: "none",
	},
};

export default typography;
