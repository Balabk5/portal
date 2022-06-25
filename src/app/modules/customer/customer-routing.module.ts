import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InquirydataComponent } from './components/inquirydata/inquirydata.component';
import { ListofdeliveryComponent } from './components/listofdelivery/listofdelivery.component';
import { SaleorderdataComponent } from './components/saleorderdata/saleorderdata.component';
import { FinancesheetComponent } from './components/financesheet/financesheet.component';
import { InvoicedetialsComponent } from './components/invoicedetials/invoicedetials.component';
import { PaymentagingComponent } from './components/paymentaging/paymentaging.component';
import { CdmemoComponent } from './components/cdmemo/cdmemo.component';
const routes: Routes = [
  {
    path: '',
    component: CustomerDashboardComponent,
    children: [
      { path: 'Profile', component: ProfileComponent },
      { path: 'Inquirydata', component: InquirydataComponent },
      { path: 'listOfDelivery', component: ListofdeliveryComponent },
      { path: 'saleOrder', component: SaleorderdataComponent },
      { path: '', redirectTo: '/customer/Profile', pathMatch: 'full' },
      { path: 'financesheet', component: FinancesheetComponent },
      { path: 'paymentaging', component: PaymentagingComponent },
      { path: 'invoiceDetial', component: InvoicedetialsComponent },
      { path: 'CDmemo', component: CdmemoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
