const countLetters = (str: string) => {
	const letters = {};
	for (const letter of str) {
		letters[letter] = (letters[letter] || 0) + 1;
	}
	return letters;
}

export default input => {
	let twos = 0;
	let threes = 0;

	for (const id of input) {
		const letters = countLetters(id);
		const counts = Object.values(letters);
		twos += counts.includes(2) ? 1 : 0;
		threes += counts.includes(3) ? 1 : 0;
	}

	return twos * threes;
}