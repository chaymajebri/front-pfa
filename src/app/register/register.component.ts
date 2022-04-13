import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  User: any = ['Super Admin', 'Author', 'Reader'];
  title = 'Tic Tac Toe';
  public isAuthenticated = false;

  constructor() { }

  ngOnInit(): void {
  }

}
