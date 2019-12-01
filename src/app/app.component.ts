import { Component } from '@angular/core';
import { AppService } from './service/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cloakHidden : boolean = false;

  constructor(
    private appService: AppService,
    private router : Router
  ) {}

  ngOnInit() {
    this.appService.cloakHidden.subscribe(value => {
      this.cloakHidden = value;
    });
  }

  goHome(){
    this.router.navigate(['/main']);
  }
}
