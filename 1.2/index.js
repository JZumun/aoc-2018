const fn = (input, visited = {}, freq = 0) => {
	for (const x of input) {
		freq += Number.parseInt(x);
		if (visited[freq]) return freq;
		visited[freq] = true;
	}
	
	return fn(input, visited, freq);
}

module.exports = fn;