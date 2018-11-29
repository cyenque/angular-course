import { Component, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    templateUrl: './confirm-delete.modal.content.html'
})
export class ConfirmDeleteModalContent{
    IdTitle:string;
    IdMessage:string;
    IdButton:string;
    IdConfirm:boolean=false;

    @Output() confirmEvent = new EventEmitter<boolean>();

    constructor(public activeModal: NgbActiveModal)
    {}

    onConfirm(value:boolean){
        this.confirmEvent.emit(value);
        this.activeModal.close();
    }

}