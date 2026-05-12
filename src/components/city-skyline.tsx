const BUILDINGS = [
	{ x: 0, w: 60, top: 145 },
	{ x: 60, w: 50, top: 118 },
	{ x: 110, w: 42, top: 108 },
	{ x: 152, w: 32, top: 78 },
	{ x: 184, w: 58, top: 92 },
	{ x: 242, w: 48, top: 128 },
	{ x: 290, w: 28, top: 58 },
	{ x: 318, w: 70, top: 84 },
	{ x: 388, w: 44, top: 108 },
	{ x: 432, w: 26, top: 68 },
	{ x: 458, w: 52, top: 88 },
	{ x: 510, w: 32, top: 40 },
	{ x: 542, w: 48, top: 65 },
	{ x: 590, w: 46, top: 98 },
	{ x: 636, w: 38, top: 118 },
	{ x: 674, w: 28, top: 60 },
	{ x: 702, w: 62, top: 80 },
	{ x: 764, w: 42, top: 106 },
	{ x: 806, w: 28, top: 73 },
	{ x: 834, w: 52, top: 86 },
	{ x: 886, w: 30, top: 50 },
	{ x: 916, w: 50, top: 76 },
	{ x: 966, w: 42, top: 110 },
	{ x: 1008, w: 32, top: 92 },
	{ x: 1040, w: 58, top: 126 },
	{ x: 1098, w: 38, top: 70 },
	{ x: 1136, w: 48, top: 96 },
	{ x: 1184, w: 42, top: 80 },
	{ x: 1226, w: 52, top: 108 },
	{ x: 1278, w: 48, top: 130 },
	{ x: 1326, w: 58, top: 115 },
	{ x: 1384, w: 56, top: 142 },
] as const;

const SVG_H = 180;
const WIN_W = 4;
const WIN_H = 6;
const COL_GAP = 13;
const ROW_GAP = 15;
const PAD = 6;

const skylinePath = (() => {
	const d: string[] = [`M 0 ${SVG_H} V ${BUILDINGS[0].top}`];
	for (let i = 0; i < BUILDINGS.length; i++) {
		const b = BUILDINGS[i];
		d.push(`H ${b.x + b.w}`);
		if (i < BUILDINGS.length - 1) d.push(`V ${BUILDINGS[i + 1].top}`);
	}
	d.push(`V ${SVG_H} Z`);
	return d.join(" ");
})();

const windows = (() => {
	const out: { x: number; y: number; delay: string }[] = [];
	for (const b of BUILDINGS) {
		const cols = Math.floor((b.w - PAD * 2) / COL_GAP);
		const rows = Math.floor((SVG_H - b.top - PAD * 2) / ROW_GAP);
		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < cols; c++) {
				out.push({
					x: b.x + PAD + c * COL_GAP,
					y: b.top + PAD + r * ROW_GAP,
					delay: `${((out.length * 0.37) % 4.5).toFixed(2)}s`,
				});
			}
		}
	}
	return out;
})();

const antennas = BUILDINGS.filter((b) => b.top < 65).map((b) => ({
	x: Math.round(b.x + b.w / 2),
	top: b.top,
}));

export function CitySkyline() {
	return (
		<div
			className="absolute inset-x-0 bottom-0 h-45 pointer-events-none select-none"
			aria-hidden="true"
		>
			<svg
				viewBox="0 0 1440 180"
				className="w-full h-full"
				preserveAspectRatio="xMidYMax slice"
			>
				<title id="svg-title">Building silhouettes</title>
				{/* Building silhouettes */}
				<path d={skylinePath} fill="white" fillOpacity={0.07} />

				{/* Twinkling windows */}
				{windows.map((w) => (
					<rect
						key={`${w.x}-${w.y}`}
						x={w.x}
						y={w.y}
						width={WIN_W}
						height={WIN_H}
						fill="white"
						className="window-twinkle"
						style={{ animationDelay: w.delay }}
					/>
				))}

				{/* Antennas + blinking beacon on tallest towers */}
				{antennas.map((a) => (
					<g key={a.x}>
						<line
							x1={a.x}
							y1={a.top - 14}
							x2={a.x}
							y2={a.top}
							stroke="rgba(255,255,255,0.18)"
							strokeWidth="1.5"
						/>
						<circle cx={a.x} cy={a.top - 15} r="2" className="beacon-blink" />
					</g>
				))}
			</svg>
		</div>
	);
}
