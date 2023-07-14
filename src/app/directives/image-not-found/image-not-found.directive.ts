import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[appImageNotFound]',
})
export class ImageNotFoundDirective {
	constructor(private renderer: Renderer2, private el: ElementRef) {}

	@HostListener('error') onError() {
		this.renderer.setAttribute(
			this.el.nativeElement,
			'src',
			'/assets/no-image.png'
		);
	}
}
