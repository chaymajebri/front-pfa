import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-cus',
  templateUrl: './navbar-cus.component.html',
  styleUrls: ['./navbar-cus.component.scss']
})
export class NavbarCusComponent implements OnInit {
  public focus;
    public listTitles: any[];
  public location: Location;

  constructor() { }

  ngOnInit(): void {
  }

}
