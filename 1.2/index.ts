const fn = (input: string[], visited = {}, freq = 0) : number => {
	for (const x of input) {
		freq += Number.parseInt(x);
		if (visited[freq]) return freq;
		visited[freq] = true;
	}
	
	return fn(input, visited, freq);
}

export default fn;