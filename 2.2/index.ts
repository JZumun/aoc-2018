const difference = (id1: string, id2: string) => {
	let diff = 0;
	for (let i = 0; i < id1.length; i++) {
		diff += !( id1[i] === id2[i] ) ? 1 : 0
	}
	return diff;
}
const intersection = (id1: string, id2: string) => {
	const ret = [];
	for (let i = 0; i < id1.length; i++) {
		if (id1[i] === id2[i]) ret.push(id1[i]);
	}
	return ret.join("");
}

export default (input: string[]) => {
	for (const id1 of input) {
		for (const id2 of input) {
			if (difference(id1, id2) === 1) return intersection(id1,id2);
		}
	}

	throw new Error("No boxes found");
}