import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWrapperComponent } from './modal-wrapper.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('ModalWrapperComponent', () => {
	let component: ModalWrapperComponent;
	let fixture: ComponentFixture<ModalWrapperComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule, NgbModule],
			providers: [NgbModal],
			declarations: [ModalWrapperComponent],
		});
		fixture = TestBed.createComponent(ModalWrapperComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
