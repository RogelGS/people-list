import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    const {email, password} = form.value;
    console.log(email, password, form.value)
    this.loginService.login(email, password);
  }

}
