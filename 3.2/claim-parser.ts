interface Claim {
	id: string,
	x: number,
	y: number,
	w: number,
	h: number,
	area: number
};
const int = Number.parseInt;
const LINE_REG = /#(?<id>\d+) @ (?<x>\d+),(?<y>\d+): (?<w>\d+)x(?<h>\d+)/;
const parseLine = (input: string) : Claim => {
	const { groups: {id, x, y, w, h} } = LINE_REG.exec(input);
	return {
		id, 
		x: int(x), 
		y: int(y), 
		w: int(w), 
		h: int(h),
		get area() { return this.w * this.h }
	};
}

export default parseLine;