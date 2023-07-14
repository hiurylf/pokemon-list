import { createAction, props } from '@ngrx/store';
import { IComment } from '@store/pokemon-list.state';

export const addComment = createAction(
	'[Pokemon List] Add Comment',
	props<{ id: string; comment: IComment }>()
);

export const removeComment = createAction(
	'[Pokemon List] Remove Comment',
	props<{ id: string }>()
);

export const changeFavorite = createAction(
	'[Pokemon List] Change Favorite',
	props<{ id: string }>()
);
