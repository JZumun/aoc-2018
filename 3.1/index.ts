import parseLine from "../3.2/claim-parser";

export default (input: string[]) => {
	const claims = input.map(parseLine);
	const fabric = claims.reduce((fabric,{x,y,w,h}) => {
		for(let dx = 0; dx < w; dx++) {
			for (let dy = 0; dy < h; dy++) {
				const key = `${x+dx},${y+dy}`;
				fabric[key] = (fabric[key] || 0) + 1;
			}
		}
		return fabric;
	},{});
	return Object.keys(fabric).reduce((total, curr)=>total + (fabric[curr] >= 2 ? 1 : 0),0);
};