import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './pokemon.service';

describe('ApiService', () => {
	let service: PokemonService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule],
		});
		service = TestBed.inject(PokemonService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
