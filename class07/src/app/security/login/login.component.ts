import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

//import { AuthService } from '../authentication/auth.service';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    errorMessage: string;
    pageTitle:string;
    //loading = false;
    userName:string;
    password:string;
    
    constructor(//private authService: AuthService,
                private router: Router) {
                    this.pageTitle = 'Login - Seguridad';
                 }
    
    onLogin():void {
        this.errorMessage = "";
        let user = this.userName;
        let pass = this.password;
        if(!isNullOrUndefined(user) && !isNullOrUndefined(pass)){
            // datos en duro.
            if(user == "sygno" && pass=="1234"){
                alert('Bienvenido al Sistema');
                this.router.navigateByUrl('/ventas');
            }else{
                alert('Error en usuario y/o password');
            }
        }
        else {
            this.errorMessage = 'Por favor, ingrese el nombre del usuario y password.';
            //console.log(this.errorMessage);
        };
    }

    onCancel():void{
        //this.authService.logout();
        this.router.navigateByUrl('/welcome');
    }
   
}
