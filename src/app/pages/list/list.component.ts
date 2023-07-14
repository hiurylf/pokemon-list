import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonService } from '@services/pokemon/pokemon.service';
import {
	BehaviorSubject,
	debounceTime,
	map,
	Observable,
	startWith,
	switchMap,
	tap,
} from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
	searchFormControl = new FormControl('');
	pokemonIdList$ = new Observable<string[]>();
	currentPage$ = new BehaviorSubject(1);
	collectionSize = 0;

	constructor(
		private readonly pokemonService: PokemonService,
		private readonly router: Router
	) {}

	public ngOnInit(): void {
		this.getPokemonIds();
	}

	public onPageChange(event: number): void {
		this.currentPage$.next(event);
	}

	onOpenDetail(id: string): Promise<boolean> {
		return this.router.navigate(['/home', id]);
	}

	private getPokemonIds(): void {
		const ids$ = this.currentPage$.pipe(
			switchMap(page => {
				const limit = 10;
				const offset = (page - 1) * limit;

				return this.pokemonService.getIds({ offset, limit });
			}),
			tap(value => {
				if (value.count) {
					this.collectionSize = value.count;
				}
			}),
			map(response => response.results.map(item => item.url.split('/').at(-2)!))
		);

		this.pokemonIdList$ = this.searchFormControl.valueChanges.pipe(
			startWith(null),
			debounceTime(300),
			switchMap(value =>
				value ? this.pokemonService.getIdsByName(value) : ids$
			)
		);
	}
}
