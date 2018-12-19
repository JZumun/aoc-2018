import processPolymer from "../5.1/process"

const filterPolymer = (units: string[], unit: string) => {
	return units.filter(u => u.toLowerCase() !== unit.toLowerCase());
}

export default (input: string[]) => {
	const polymer = input[0];
	let units = polymer.split('');

	return "abcdefghijklmnopqrstuvwxyz".split("")
		.map(c => processPolymer(filterPolymer(units, c)))
		.reduce((lowest, polymer) => polymer.length < lowest ? polymer.length : lowest, Infinity);
}