import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss'],

})
export class CustomerHomeComponent implements OnInit {


  sideBarOpen = true;
  constructor( 

  ) { }

  ngOnInit(): void {

  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
