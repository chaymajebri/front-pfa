import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-cus',
  templateUrl: './navbar-cus.component.html',
  styleUrls: ['./navbar-cus.component.scss']
})
export class NavbarCusComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
