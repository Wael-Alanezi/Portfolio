export const mapPalette = ['#0A1F1F', '#0E2B2A', '#123A36', '#1A4D44', '#14423C'];
export const ndviPalette = ['#D85A30', '#EF9F27', '#C0DD97', '#639922', '#3B6D11'];

export function noise(x: number, y: number) {
  const s = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return s - Math.floor(s);
}

export function level(i: number, j: number, levels: number) {
  const v = 0.55 * (0.5 + 0.5 * Math.sin(i * 0.45) * Math.cos(j * 0.7)) + 0.45 * noise(i, j);
  return Math.min(levels - 1, Math.floor(v * levels));
}

export interface Grid {
  cols: number;
  rows: number;
  cell: number;
  cellY?: number;
  gap: number;
  colors?: string[];
  pick?: (i: number, j: number) => number;
}

export function gridPaths({ cols, rows, cell, cellY = cell, gap, colors = mapPalette, pick }: Grid) {
  const w = +(cell - gap).toFixed(2);
  const h = +(cellY - gap).toFixed(2);
  const paths = colors.map(() => [] as string[]);
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const index = pick ? pick(i, j) : level(i, j, colors.length);
      const x = +(i * cell + gap / 2).toFixed(2);
      const y = +(j * cellY + gap / 2).toFixed(2);
      paths[index].push(`M${x} ${y}h${w}v${h}h-${w}z`);
    }
  }
  return colors.map((color, index) => ({ color, d: paths[index].join('') }));
}
