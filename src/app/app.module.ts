import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewsConfirmComponent } from './reviews-confirm/reviews-confirm.component';
import { FilingTypeComponent } from './filing-type/filing-type.component';
import { MonthComponent } from './month/month.component';
import { YearComponent } from './year/year.component';
import { SaleAmountComponent } from './sale-amount/sale-amount.component';
import { TaxAmountComponent } from './tax-amount/tax-amount.component';
import { SurchargeComponent } from './surcharge/surcharge.component';
import { PenaltyComponent } from './penalty/penalty.component';
import { TotalAmountComponent } from './total-amount/total-amount.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { InputDetailComponent } from './input-detail/input-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TaxDataModalComponent } from './tax-data-modal/tax-data-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    ReviewsConfirmComponent,
    FilingTypeComponent,
    MonthComponent,
    YearComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    SurchargeComponent,
    PenaltyComponent,
    TotalAmountComponent,
    InputDetailComponent,
    TaxDataModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule
    
    
  ],
  providers: [InputDetailComponent,
    FilingTypeComponent ,    MonthComponent,
    YearComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
