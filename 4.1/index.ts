import Solver from "../utils/solver"
import parse from "./line-parser";
import { GuardState } from "./line-parser";

const fn: Solver = input => {
	const infos = parse(input);
	const shifts = [];

	for (const info of infos) {
		if (info.action === GuardState.BEGIN) {
			
		}
	}



	return infos;
};

export default fn;