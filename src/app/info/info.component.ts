import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  username:string = '';
  userid:string = '';
  userBirthDate:string = '';
  userAge:string = '';

  constructor(private router:Router,private form:FormsModule) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('userName');
    this.userid = sessionStorage.getItem('id');
    this.userBirthDate = sessionStorage.getItem('birthDate');
    this.userAge = sessionStorage.getItem('Age');
  }
  logOutUser(event){
    event.preventDefault();
    sessionStorage.clear();
    this.router.navigateByUrl('/Login');
  }

}
