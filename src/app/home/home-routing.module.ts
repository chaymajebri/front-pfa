import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterAvatarComponent } from './register-avatar/register-avatar.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
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
  path: 'about_us',
  component:AboutUsComponent
},
{
  path:'contact',
  component:ContactComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
