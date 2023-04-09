import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MessagingPageComponent } from './messaging-page/messaging-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {path:'', component:LoginPageComponent},
  {path:'home', component:HomePageComponent},
  {path:'register', component:RegisterPageComponent},
  {path:'MessageBored', component:MessagingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
