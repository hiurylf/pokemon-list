import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
	BehaviorSubject,
	catchError,
	filter,
	finalize,
	Observable,
	of,
	switchMap,
} from 'rxjs';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { IPokemon } from '@interfaces/pokemon';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
	pokemon$?: Observable<IPokemon | null>;
	isLoading$ = new BehaviorSubject(true);
	typeText: { [k: string]: string } = {
		'=0': 'Tipo',
		'=1': 'Tipo',
		other: 'Tipos',
	};

	@Input() id?: string;

	constructor(
		private readonly route: ActivatedRoute,
		private readonly pokemonService: PokemonService,
		private readonly modalService: NgbModal
	) {}

	public ngOnInit(): void {
		this.pokemon$ = of(this.id).pipe(
			filter(id => !!id),
			switchMap(id => this.pokemonService.getOneByNameOrId(id!)),
			catchError(() => of(null)),
			finalize(() => {
				this.isLoading$.next(false);
			})
		);
	}

	public onCloseModal(): void {
		this.modalService.dismissAll();
	}
}
