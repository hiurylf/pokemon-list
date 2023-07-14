import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '@pages/list/list.component';
import { ModalWrapperComponent } from '@components/modal-wrapper/modal-wrapper.component';
import { DetailComponent } from '@components/detail/detail.component';

const routes: Routes = [
	{
		path: '',
		component: ListComponent,
		children: [
			{
				path: ':id',
				component: ModalWrapperComponent,
				data: { component: DetailComponent },
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule {}
