import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MasterComponent } from './pages/master/master.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { ReportComponent } from './pages/report/report.component';
import { ManagerGuard } from './guards/manager.guard';

const routes: Routes = [
  // { path: 'login/:par', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: '',
    canActivate: [AuthenticatedGuard],
    component: MasterComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'reports',
        component: ReportComponent,
        canActivate: [ManagerGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
