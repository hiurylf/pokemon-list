import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '@pages/list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from '@pages/pages-routing.module';
import { ListItemComponent } from '@components/list-item/list-item.component';

@NgModule({
	declarations: [ListComponent, ListItemComponent],
	imports: [
		CommonModule,
		NgbModule,
		ReactiveFormsModule,
		FormsModule,
		PagesRoutingModule,
	],
})
export class PagesModule {}
