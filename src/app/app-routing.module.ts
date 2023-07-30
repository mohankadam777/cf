import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SecurePageComponent } from './components/secure-page/secure-page.component';
import { AppComponent } from './app.component';
import { UnsecurePageComponent } from './components/unsecure-page/unsecure-page.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginPageComponent},
{path:'secure',component:SecurePageComponent},
{path:'unsecure',component:UnsecurePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
