
export default (input: string[]) => 
					input.map(l => Number.parseInt(l))
						.reduce((a,b)=>a+b,0);