import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpdashboardComponent } from './components/empdashboard/empdashboard.component';
import { EmpprofComponent } from './components/empprof/empprof.component';
import { LeavereqComponent } from './components/leavereq/leavereq.component';
import { PayslipComponent } from './components/payslip/payslip.component';


const routes: Routes = [
  {
    path: '',
    component: EmpdashboardComponent,
    children: [
      {
        path:'/employee/profile',redirectTo:'', pathMatch:'full'
      },
      {path:'profile', component:EmpprofComponent},
      {path:'leaveRequest', component: LeavereqComponent}, 
      {path:'payslip', component: PayslipComponent}
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
