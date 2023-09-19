import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IPokemonListState } from './pokemon-list.state';

const selectPokemonListState =
	createFeatureSelector<IPokemonListState>('pokemonList');

export const selectPokemonListItem = createSelector(
	selectPokemonListState,
	(state: IPokemonListState, id: string) => state.find(el => el.id === id)
);
