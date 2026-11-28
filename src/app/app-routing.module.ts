import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { AuthGuard } from './auth.guard';
import { WorkerRegisterComponent } from './pages/worker-register/worker-register.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/login/reset-password/reset-password.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:SignupComponent
  },
  {
   path:'worker-register',
   component: WorkerRegisterComponent,
   canActivate:[AuthGuard]
  },
  {
    path:'home',
    component:HomeComponent,
    // canActivate:[AuthGuard]
    
  },
  {
    path:'workers',
    loadChildren: ()=>
    import('./pages/workers/workers.module').then(m => m.WorkersModule),
    // canActivate:[AuthGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'reset-password/:token',
    component: ResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
