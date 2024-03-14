import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn=false;
  constructor(private service:LoginService) { }

  ngOnInit(): void {
    this.loggedIn=this.service.isLoggedIn();
  }

  logoutUser(){
    this.service.logout();
  }
}
