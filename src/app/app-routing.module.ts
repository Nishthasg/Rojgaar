import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
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
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard]
    
  },
  {
    path:'workers',
    loadChildren: ()=>
    import('./pages/workers/workers.module').then(m => m.WorkersModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
