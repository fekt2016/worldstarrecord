const breakpoints = {
	xs: '320px',
	sm: '640px',
	md: '886px',
	lg: '1024px',
	xl: '1280px',
	'2xl': '1536px',
};

export const devicesMax = {
	xs: `(max-width: ${breakpoints.xs})`,
	sm: `(max-width: ${breakpoints.sm})`,
	md: `(max-width: ${breakpoints.md})`,
	lg: `(max-width: ${breakpoints.lg})`,
	xl: `(max-width: ${breakpoints.xl})`,
	'2xl': `(max-width: ${breakpoints['2xl']})`,
};

export const devicesMin = {
	xs: `(min-width: ${breakpoints.xs})`,
	sm: `(min-width: ${breakpoints.sm})`,
	md: `(min-width: ${breakpoints.md})`,
	lg: `(min-width: ${breakpoints.lg})`,
	xl: `(min-width: ${breakpoints.xl})`,
	'2xl': `(min-width: ${breakpoints['2xl']})`,
};
