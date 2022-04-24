import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterAvatarComponent } from './register-avatar/register-avatar.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { ContactComponent } from './contact/contact.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';


//angular material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AboutUsComponent } from './about-us/about-us.component';
import {MatToolbarModule} from  '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HeaderHomeComponent } from './header-home/header-home.component';


@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    RegisterAvatarComponent,
    RegisterCustomerComponent,
    ContactComponent,
    AboutUsComponent,
    HeaderHomeComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MdbCollapseModule
    

  ],
  exports: [
    HomePageComponent,
  

  ]

})
export class HomeModule {


 }
