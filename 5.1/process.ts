const willAnnihilate = (a: string, b: string) : boolean => {
	return (a != null && b != null) && (a.toLowerCase() === b.toLowerCase()) && (a !== b);
}

export default (units: string[]): string[] => {
	let annihilations = 0;
	
	do {
		annihilations = 0;
		for (let i = 0; i < units.length; i++) {
			if (willAnnihilate(units[i], units[i+1])) {
				delete units[i];
				delete units[i+1];
				annihilations++;
				i++
			}
		}
		units = units.filter(i => i !== undefined);
	} while ( annihilations != 0 );

	return units;
}