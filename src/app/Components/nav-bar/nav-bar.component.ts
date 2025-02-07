import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{
    userName="Error";

    constructor(private cookieService:CookieService){

    }
    ngOnInit(): void {
      if(this.cookieService.check('UserName')){
        this.userName= this.cookieService.get('UserName');
      }
      
      
    }
}
