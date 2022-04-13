import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { RegisterAvatarComponent } from './register-avatar/register-avatar.component';
import { RegisterComponent } from './register/register.component';
import { HeaderHomeComponent } from './header-home/header-home.component';

const routes: Routes =[
  {
    path: 'login',
    component:LoginComponent

  },
  {
    path: 'register_customer',
    component:RegisterCustomerComponent
  },
  {
  path: 'register_avatar',
  component:RegisterAvatarComponent
  },
  {
  path: 'register',
  component:RegisterComponent
  },
  {
    path: 'home',
    component:HeaderHomeComponent
  },


]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
