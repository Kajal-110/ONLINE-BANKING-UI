import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckBookComponent } from './components/check-book/check-book.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { HomeLoanComponent } from './components/home-loan/home-loan.component';
import { HomeComponent } from './components/home/home.component';
import { PersonalLoanComponent } from './components/personal-loan/personal-loan.component';
import { ServicesComponent } from './components/services/services.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'',component:UserDashboardComponent,children:[
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'/user/home',pathMatch:'full'},
      {path:'create-account',component:CreateAccountComponent},
      {path:'debit-card',component:DebitCardComponent},
      {path:'check-book',component:CheckBookComponent},
      {path:'services',component:ServicesComponent},
       {path:'personal-loan',component:PersonalLoanComponent},
      {path:'home-loan',component:HomeLoanComponent}
     
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
