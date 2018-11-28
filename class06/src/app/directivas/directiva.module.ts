// ./app/shared/shared.module.ts
import { OcultarDirective } from './ocultar.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivaComponent } from './directiva.component';
import { DestruirDirective } from './destruir.directive';
 
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        OcultarDirective,
        DestruirDirective,
        DirectivaComponent
    ],
    exports: [
        OcultarDirective
    ]
})
 
export class DirectivaModule { }