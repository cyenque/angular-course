import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-a6-yenque';

  constructor(private router: Router){

  }

  logOut(): void {
    //this.authService.logout();
    this.router.navigateByUrl('/welcome');
  }
}
