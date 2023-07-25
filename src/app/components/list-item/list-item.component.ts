import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	TemplateRef,
} from '@angular/core';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { map, Observable } from 'rxjs';
import { IPokemon } from '@interfaces/pokemon';
import { Store } from '@ngrx/store';
import * as PokemonListActions from '@store/pokemon-list.actions';
import { IComment, IPokemonListItemState } from '@store/pokemon-list.state';
import { selectPokemonListItem } from '@store/pokemon-list.selectors';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-list-item',
	templateUrl: './list-item.component.html',
	styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
	form: FormGroup;
	showFormInvalidMessage = false;
	pokemon$ = new Observable<IPokemon | null>();
	pokemonListItem$ = new Observable<Omit<IPokemonListItemState, 'id'>>();

	@Input() id!: string;

	@Output() openDetail = new EventEmitter<void>();

	constructor(
		private readonly pokemonService: PokemonService,
		private readonly store: Store,
		private readonly formBuilder: FormBuilder,
		private readonly modalService: NgbModal
	) {
		this.form = this.formBuilder.group({
			name: ['', [Validators.required]],
			text: ['', [Validators.required]],
		});
	}

	public ngOnInit(): void {
		this.pokemonListItem$ = this.store.pipe(
			map(state => selectPokemonListItem(state, this.id) || {}),
			map(({ comment, isFavorite }) => ({ comment, isFavorite }))
		);

		this.pokemon$ = this.pokemonService.getOneByNameOrId(this.id);
	}

	public onChangeFavorite(id: string | number): void {
		this.store.dispatch(PokemonListActions.changeFavorite({ id: String(id) }));
	}

	public onRemoveComment(id: string | number): void {
		this.store.dispatch(PokemonListActions.removeComment({ id: String(id) }));
	}

	public onOpenCommentModal(
		id: string | number,
		contentModal: TemplateRef<any>,
		comment?: IComment
	): void {
		this.form.patchValue(comment || {});

		this.modalService
			.open(contentModal, { ariaLabelledBy: 'modal-basic-title' })
			.result.then(
				comment => {
					if (comment) {
						this.store.dispatch(
							PokemonListActions.addComment({
								id: String(id),
								comment,
							})
						);
					}
					this.form.reset();
				},
				() => {
					this.form.reset();
				}
			);
	}

	public onSaveComment(closeFn: (value?: object) => void): void {
		if (this.form.valid) {
			closeFn(this.form.value);
		} else {
			this.showFormInvalidMessage = true;
		}
	}

	get name() {
		return this.form.get('name');
	}

	get text() {
		return this.form.get('text');
	}
}
