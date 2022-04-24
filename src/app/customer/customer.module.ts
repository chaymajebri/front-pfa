import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerHomeComponent } from './customer-home.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavbarCusComponent } from './navbar-cus/navbar-cus.component';

@NgModule({
  declarations: [
    CustomerHomeComponent,
    SidebarComponent,
    NavbarCusComponent


  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatSidenavModule

  ],
  exports: [
    CustomerHomeComponent

  ]
})
export class CustomerModule { }
