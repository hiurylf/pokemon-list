import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagesModule } from '../pages.module';

import { ListComponent } from './list.component';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

describe('ListComponent', () => {
	let component: ListComponent;
	let fixture: ComponentFixture<ListComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [PagesModule, HttpClientModule],
			providers: [PokemonService],
			declarations: [ListComponent],
		});
		fixture = TestBed.createComponent(ListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
