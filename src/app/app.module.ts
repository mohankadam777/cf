import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurePageComponent } from './components/secure-page/secure-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { UnsecurePageComponent } from './components/unsecure-page/unsecure-page.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './services/auth.guard';
import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SecurePageComponent,
    LoginPageComponent,
    UnsecurePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
