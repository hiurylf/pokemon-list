export type IPokemonListState = IPokemonListItemState[];

export interface IPokemonListItemState {
	id?: string;
	comment?: IComment;
	isFavorite?: boolean;
}

export interface IComment {
	name: string;
	text: string;
}
