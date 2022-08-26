import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { CheckBookComponent } from './components/check-book/check-book.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeLoanComponent } from './components/home-loan/home-loan.component';
import { PersonalLoanComponent } from './components/personal-loan/personal-loan.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CreateAccountComponent,
    DebitCardComponent,
    CheckBookComponent,
    ServicesComponent,
    HomeLoanComponent,
    PersonalLoanComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
