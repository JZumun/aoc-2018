import parseLine from "./claim-parser";

export default (input: string[]) => {
	const claims = input.map(parseLine);
	
	const claimsObject = claims.reduce((obj,claim)=>{
		obj[claim.id] = claim;
		return obj;
	},{});

	const fabric = claims.reduce((fabric,{id,x,y,w,h}) => {
		for(let dx = 0; dx < w; dx++) {
			for (let dy = 0; dy < h; dy++) {
				const key = `${x+dx},${y+dy}`;
				fabric[key] = (fabric[key] || []);
				fabric[key].push(id);
			}
		}
		return fabric;
	},{});

	const candidates = Object.keys(fabric)
		.filter(key => fabric[key].length === 1)
		.reduce((obj,key)=>{
			const claimId = fabric[key][0];
			obj[claimId] = (obj[claimId] || 0) + 1;
			return obj;
		},{})

	return Object.keys(candidates).filter(id => candidates[id] === claimsObject[id].area)[0];
}