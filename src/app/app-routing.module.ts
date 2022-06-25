import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CustomerModule } from './modules/customer/customer.module';

const routes: Routes = [
  {path:'landingPage', component:HeaderComponent},
  {path: '', redirectTo: '/landingPage', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'customer', loadChildren: ()=> import('./modules/customer/customer.module').then((m) => m.CustomerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
