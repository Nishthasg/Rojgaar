import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { WorkerDetailsComponent } from './pages/workers/worker-details/worker-details.component';
import { CategoryComponent } from './pages/category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkerCardsComponent } from './components/worker-cards/worker-cards.component';
import { WorkersModule } from './pages/workers/workers.module';
import { HttpClientModule } from '@angular/common/http';
import { WorkerRegisterComponent } from './pages/worker-register/worker-register.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/login/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ForgetComponent,
    WorkersComponent,
    WorkerDetailsComponent,
    WorkerCardsComponent,
    CategoryComponent,
    WorkerRegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    WorkersModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
