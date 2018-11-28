// Directiva estructural
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
selector: '[destruir]'
})

export class DestruirDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }
  
  @Input() set destruir(destruir: boolean) {
    if (!destruir) {
      // Si se cumple la condición añadimos el elemento al DOM
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // En caso contrario, eliminamos el contenido del DOM
      this.viewContainer.clear();
    }
  }
}