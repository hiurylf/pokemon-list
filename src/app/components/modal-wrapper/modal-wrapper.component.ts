import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-modal-wrapper',
	template: '',
})
export class ModalWrapperComponent implements OnInit {
	constructor(
		private readonly modalService: NgbModal,
		private readonly route: ActivatedRoute,
		private readonly router: Router
	) {}

	ngOnInit(): void {
		const { data, paramMap } = this.route.snapshot;

		const dialog = this.modalService.open(data['component'], {
			centered: true,
			size: 'lg',
		});

		dialog.componentInstance.id = paramMap.get('id');

		dialog.result.then(
			() => this.router.navigateByUrl('/home'),
			() => this.router.navigateByUrl('/home')
		);
	}
}
