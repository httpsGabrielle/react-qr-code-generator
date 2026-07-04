import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
	0: "#FFFFFF",
	100: "#F9FAFB",
	200: "#F4F6F8",
	300: "#DFE3E8",
	400: "#C4CDD5",
	500: "#919EAB",
	600: "#637381",
	700: "#454F5B",
	800: "#212B36",
	900: "#161C24",
};

const primary = {
	lighter: "#f5f6fb",
	light: "#E5EDF6",
	main: "#2488f7",
	dark: "#0d6efd",
	darker: "#0d6efd",
	contrastText: "#fff",
};

const SECONDARY = {
	lighter: "#f8f9fa",
	light: "#dee2e6",
	main: "#6c757d",
	dark: "#495057",
	darker: "#343a40",
	contrastText: "#fff",
};

const INFO = {
	lighter: "#D0F2FF",
	light: "#74CAFF",
	main: "#1890FF",
	dark: "#0C53B7",
	darker: "#04297A",
	contrastText: "#fff",
};

const SUCCESS = {
	lighter: "#E9FCD4",
	light: "#AAF27F",
	main: "#54D62C",
	dark: "#229A16",
	darker: "#08660D",
	contrastText: "#fff",
};

const WARNING = {
	lighter: "#FFF7CD",
	light: "#FFE16A",
	main: "#FFC107",
	dark: "#B78103",
	darker: "#7A4F01",
	contrastText: GREY[800],
};

const ERROR = {
	lighter: "#FFE7D9",
	light: "#FFA48D",
	main: "#f44336",
	dark: "#c62828",
	darker: "#7A0C2E",
	contrastText: "#fff",
};
/// Cores para trabalhar futuramente ///

const DARK = {
	lighter: "#fff",
	light: "#232323",
	main: "#161415",
	dark: "#000",
	darker: "#000",
	contrastText: "#fff",
};

const LIGHT = {
	lighter: "#fff",
	light: "#fff",
	main: "#fff",
	dark: "#ff",
	darker: "#fff",
	contrastText: "#161415",
};
// ----------------------------------------------------------------

const palette = {
	common: { black: "#000", white: "#fff" },
	primary: primary,
	secondary: SECONDARY,
	info: INFO,
	success: SUCCESS,
	warning: WARNING,
	error: ERROR,
	grey: GREY,
	dark: DARK,
	light: LIGHT,
	divider: alpha(GREY[500], 0.24),
	text: {
		primary: GREY[800],
		secondary: GREY[600],
		disabled: GREY[500],
	},
	background: {
		paper: "#fff",
		default: GREY[100],
	},
	action: {
		active: GREY[600],
		hover: alpha(GREY[500], 0.08),
		selected: alpha(GREY[500], 0.16),
		disabled: alpha(GREY[500], 0.8),
		disabledBackground: alpha(GREY[500], 0.24),
		focus: alpha(GREY[500], 0.24),
		hoverOpacity: 0.08,
		disabledOpacity: 0.48,
	},
};

export default palette;
