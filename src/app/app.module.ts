import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DetailComponent } from '@components/detail/detail.component';
import { ModalWrapperComponent } from '@components/modal-wrapper/modal-wrapper.component';

import { StoreModule } from '@ngrx/store';
import { pokemonListReducer } from '@app/store/pokemon-list.reducer';
import { ImageNotFoundDirective } from '@directives/image-not-found/image-not-found.directive';

@NgModule({
	declarations: [
		AppComponent,
		DetailComponent,
		ModalWrapperComponent,
		ImageNotFoundDirective,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
		StoreModule.forRoot({ pokemonList: pokemonListReducer }),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
