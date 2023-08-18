import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared-service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.css']
})
export class TotalAmountComponent implements OnInit {

  constructor(private _service: SharedService) { }

  filingType: string | null = null;
  surcharge: number | null = null;
  taxAmount: number | null= null;
  totalAmount: number | null= null;
  penalty: number | null= null;


  formatAmount() {
    if (this.totalAmount !== null) {
      this.totalAmount = parseFloat(this.totalAmount.toFixed(2)); // Format amount
    }
  }

  onInputKeyPress(event: KeyboardEvent) {
    const inputChar = event.key;
    if (!/^\d*\.?\d*$/.test(inputChar)) {
      event.preventDefault();
    }
  }

  ngOnInit(): void {
    this._service.selectedtaxAmount$.pipe(
      switchMap((taxAmount: number | null) => {
        this.taxAmount = taxAmount;
        return this._service.selectedSurcharge$;
      }),
      switchMap((surcharge: number | null) => {
        this.surcharge = surcharge;
        return this._service.selectedPenalty$;
      }),
      switchMap((penalty: number | null) => {
        this.penalty = penalty;
        return this._service.selectedfilingType$;
      })
    ).subscribe((filingType: string | null) => {
      this.filingType = filingType;
      this.calculateTotalAmount();
    });

    this.updateDisplayedTotalAmount(); // เรียกใช้เมื่อคอมโพเนนต์ถูกสร้างเพื่อกำหนดค่าเริ่มต้น
    this.resetInputs()
  }
  


  updateDisplayedTotalAmount() {
    this.totalAmount = this.totalAmount === 200 ? null : this.totalAmount;

  }

  calculateTotalAmount() {
    if (this.taxAmount !== null && this.surcharge !== null && this.penalty !== null) {
      if(this.filingType === '1' || this.filingType === 'Additional Filing') {
        this.totalAmount = parseFloat((this.taxAmount + this.surcharge  + this.penalty).toFixed(2)); 
      } else if (this.filingType === '0' || this.filingType === 'Ordinary Filing') {
        this.totalAmount = this.taxAmount// ไม่นำ surcharge กับ penalty มาคำนวณ
      }
    } else {
      this.totalAmount = null;
    }
    this._service.updateSelectedTotalAmount(this.totalAmount);
    
  }


  onTotalAmountChange(newValue: string) {
    const newtotalAmount = parseFloat(newValue);
    if (!isNaN(newtotalAmount)) {
      this.totalAmount = newtotalAmount;
    } else {
      // กำหนดให้ displayedTaxAmount เป็น null เมื่อค่าไม่ถูกต้อง
      this.totalAmount = null;
    }
  }

  resetInputs() {
    this.totalAmount = null;
  }

  

}
