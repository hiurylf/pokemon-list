export interface IPokemon {
	name: string;
	id: number;
	order: number;
	sprites: {
		front_default: string;
		other: {
			dream_world: {
				front_default: string;
			};
		};
	};
	base_experience: number;
	height: number;
	weight: number;
	types: { slot: number; type: IType }[];
}

interface IType {
	name: string;
	url: string;
}
