// Directiva de Atributo
import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
selector: '[ocultar]'
})

export class OcultarDirective implements OnInit {
  @Input() ocultar: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Usamos renderer para mostrar el elemento con estilos
  }

  ngOnInit() {
    if (this.ocultar) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }
  }
}