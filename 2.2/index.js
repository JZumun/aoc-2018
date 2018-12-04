const difference = (id1, id2) => {
	let diff = 0;
	for (let i = 0; i < id1.length; i++) {
		diff += !( id1[i] === id2[i] )
	}
	return diff;
}
const intersection = (id1, id2) => {
	const ret = [];
	for (let i = 0; i < id1.length; i++) {
		if (id1[i] === id2[i]) ret.push(id1[i]);
	}
	return ret.join("");
}

module.exports = input => {
	for (const id1 of input) {
		for (const id2 of input) {
			if (difference(id1, id2) === 1) return intersection(id1,id2);
		}
	}

	throw new Error("No boxes found");
}