import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { IPokemon } from '@interfaces/pokemon';

interface IGetIdsReturn {
	count: number;
	next: string;
	previous: string;
	results: { name: string; url: string }[];
}

@Injectable({
	providedIn: 'root',
})
export class PokemonService {
	apiUrl = 'https://pokeapi.co/api/v2/pokemon';
	constructor(private readonly http: HttpClient) {}

	public getIds(params: {
		offset: number;
		limit: number;
	}): Observable<IGetIdsReturn> {
		return this.http.get<IGetIdsReturn>(this.apiUrl, {
			params,
		});
	}

	getIdsByName(text: string): Observable<string[]> {
		return this.http.get<IPokemon>(`${this.apiUrl}/${text}`).pipe(
			map(({ id }) => [String(id)]),
			catchError(() => of([]))
		);
	}

	getOneByNameOrId(text: string): Observable<IPokemon | null> {
		return this.http
			.get<IPokemon>(`${this.apiUrl}/${text}`)
			.pipe(catchError(() => of(null)));
	}
}
