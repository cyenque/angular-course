import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { isNullOrUndefined } from "util";
import { Router } from "@angular/router";

@Component({
    templateUrl: './login-react.component.html'
})
export class LoginReactComponent implements OnInit{
    pageTitle:string;
    form: FormGroup;

    constructor(private fb: FormBuilder, private router:Router){
        this.pageTitle='Login React Formulario'
    }
    ngOnInit(): void {
        this.form = this.fb.group({
            userName:['',[Validators.required, Validators.minLength(2)]],
            password:['',Validators.required],
            passwordRepeat:['',Validators.required]
        },
        {
            validator: this.passwordMatchValidator
        });
    }

    passwordMatchValidator(g: FormGroup) {
        return g.get('password').value === g.get('passwordRepeat').value
           ? null : {'mismatch': true};
     }

     onLogin():void{
        let user = this.form.get('userName').value;
        let pass = this.form.get('password').value;
        if(!isNullOrUndefined(user) && !isNullOrUndefined(pass)){
            // datos en duro.
            if(user == "sygno" && pass=="1234"){
                alert('Bienvenido al Sistema');
                this.router.navigateByUrl('/ventas');
            }else{
                alert('Error en usuario y/o password');
            }
        }        
     }

}