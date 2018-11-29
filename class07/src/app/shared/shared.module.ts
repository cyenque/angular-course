import { ConfirmDeleteModalContent } from './../ventas/modals/confirm-delete.modal.content';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule
    ],
    declarations: [
        ConfirmDeleteModalContent
    ],
    entryComponents: [
        ConfirmDeleteModalContent
    ],
    providers: []
})
export class SharedModule { }
