const countLetters = str => {
	const letters = {};
	for (const letter of str) {
		letters[letter] = (letters[letter] || 0) + 1;
	}
	return letters;
}

module.exports = input => {
	let twos = 0;
	let threes = 0;

	for (const id of input) {
		letters = countLetters(id);
		const counts = Object.values(letters);
		twos += counts.includes(2);
		threes += counts.includes(3);
	}

	return twos * threes;
}