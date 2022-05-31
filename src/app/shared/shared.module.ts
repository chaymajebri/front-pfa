import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { SharedRoutingModule } from './shared-routing.module';
import { HomeRoutingModule } from '../home/home-routing.module';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MdbCollapseModule,
    HomeRoutingModule,
    SharedRoutingModule
    

  ],
  exports: [
    NavbarComponent,
    FooterComponent

  ]
})
export class SharedModule { }
