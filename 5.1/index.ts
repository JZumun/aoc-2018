import processPolymer from "./process"

export default (input: string[]) => {
	const polymer = input[0];
	let units = polymer.split('');
	return processPolymer(units).length;
}