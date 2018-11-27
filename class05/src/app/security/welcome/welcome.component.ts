import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Bienvenido a Sygno Web Solution';

    constructor(private router: Router) { }

    logOut(): void {
        this.router.navigateByUrl('/welcome');
    }
}