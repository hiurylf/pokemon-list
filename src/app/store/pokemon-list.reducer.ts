import { createReducer, on } from '@ngrx/store';
import * as ListItemActions from './pokemon-list.actions';
import { IPokemonListState } from './pokemon-list.state';

export const initialState: IPokemonListState = [];

export const pokemonListReducer = createReducer(
	initialState,
	on(ListItemActions.addComment, (state, { id, comment }) => {
		const pokemon = state.find(el => el.id === id);

		if (pokemon) {
			return state.map(el => ({
				...el,
				...(el.id === id && { comment }),
			}));
		}

		return [...state, { id, comment }];
	}),

	on(ListItemActions.removeComment, (state, { id }) =>
		state.filter(el => el.id !== id)
	),

	on(ListItemActions.changeFavorite, (state, { id }) => {
		const pokemon = state.find(el => el.id === id);

		if (pokemon) {
			return state.map(el => ({
				...el,
				...(el.id === id && { isFavorite: !pokemon.isFavorite }),
			}));
		}

		return [...state, { id, isFavorite: true }];
	})
);
