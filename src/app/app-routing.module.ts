import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateExpenseEntryComponent } from './modules/visit-expense/create-expense-entry/create-expense-entry.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './welcome/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardToolsComponent } from './dashboard/dashboard-tools/dashboard-tools.component';
import { WelcomeComponent } from './welcome/welcome.component';



const appRoutes: Routes = [
  {
    path: '', component: WelcomeComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    // canDeactivate: [CanDeactivateGuard],
    children: [
      // { path: '', component: TeamSelectionComponent },
      { path: 'mydashboard', component: DashboardToolsComponent },
      { path: 'visit-expense/create', component: CreateExpenseEntryComponent }
    ]
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
    data: { message: 'Page not found!' }
  },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
