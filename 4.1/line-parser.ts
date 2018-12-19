export enum GuardState {
	AWAKE = "awake",
	SLEEP = "asleep",
	BEGIN = "begin"
}
export interface GuardInfo {
	day: Date;
	minute: number;
	action: GuardState,
	guard: string
}


const INFO_REG = /\[(?<day>.+) \d+:(?<min>\d+)\] (?<line>.*)/
const LINE_REG = /Guard #(?<guard>\d+) begins shift/

const guardInfoSorter = (a: GuardInfo,b : GuardInfo): number => {
	if ( a.day === b.day ) { return a.minute < b.minute ? -1 : 1; }
	else return a.day < b.day ? -1 : 1;
}

export default (input: string[]) : GuardInfo[] => {
	const infos = input.map(info => {

		const { groups: { day, min, line } } = INFO_REG.exec(info);
		let action = GuardState.BEGIN;
		let guard = null;

		if (line.startsWith("falls asleep")) {
			action = GuardState.SLEEP
		} else if (line.startsWith("wakes up")) {
			action = GuardState.AWAKE
		} else {
			({ groups: { guard } } = LINE_REG.exec(line));
		}
		
		return {
			day: new Date(day),
			minute: action === GuardState.BEGIN ? 0 : Number.parseInt(min),
			action, guard
		};
	}).sort(guardInfoSorter);

	let currentGuard: string = null;
	for (const guardInfo of infos) {
		if (guardInfo.guard) {
			currentGuard = guardInfo.guard;
		} else {
			guardInfo.guard = currentGuard;
		}
	}

	return infos;
};