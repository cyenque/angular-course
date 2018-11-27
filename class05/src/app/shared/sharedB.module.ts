import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import { StarComponent } from './star.component';
/*
import { SharedService } from './shared.service';
import { NumeroDecimalPipe } from '../areas/areas-shared/helpers/numero-decimal.pipe';
import { NumeroDecimalFormatterDirective } from '../areas/areas-shared/helpers/numero-decimal-formatter.directive';
import { ConfirmDeleteModalContent } from '../areas/areas-shared/modals/confirm-delete.modal.content';
*/
@NgModule({
    imports: [CommonModule],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        //NumeroDecimalPipe
    ],
    declarations: [
        //NumeroDecimalPipe,
        //NumeroDecimalFormatterDirective,
        //ConfirmDeleteModalContent
    ],
    entryComponents: [
        //ConfirmDeleteModalContent
    ],
    providers: []//SharedService],
})
export class SharedModule { }
