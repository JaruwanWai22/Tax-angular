import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared-service';


@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.css']
})
export class TaxAmountComponent implements OnInit {

  constructor(private _service: SharedService) { }


  saleAmount!: number;
  taxAmount: number | null = null;

  formatAmount() {
    if (this.taxAmount !== null) {
      this.taxAmount = parseFloat(this.taxAmount.toFixed(2)); // Format amount
    }
  }

  onInputKeyPress(event: KeyboardEvent) {
    const inputChar = event.key;
    if (!/^\d*\.?\d*$/.test(inputChar)) {
      event.preventDefault();
    }
  }

  ngOnInit() {
    this._service.selectedsaleAmount$.subscribe((amount: number) => {
      this.saleAmount = amount;
      this.calculateTax();
    });
  
    this.updateDisplayedTaxAmount(); // เรียกใช้เมื่อคอมโพเนนต์ถูกสร้างเพื่อกำหนดค่าเริ่มต้น
    this.resetInputs()
  }

  updateDisplayedTaxAmount() {
    this.taxAmount = this.taxAmount === 0 ? null : this.taxAmount;

  }

  calculateTax() {
    this.taxAmount = parseFloat((this.saleAmount * 0.07).toFixed(2));;
    this._service.updateSelectedtaxAmount(this.taxAmount);
    
  }

  Data(){
    this._service.updateSelectedtaxAmount(this.taxAmount);
  }


  onTaxAmountChange(newValue: string) {
    const newTaxAmount = parseFloat(newValue);
    if (!isNaN(newTaxAmount)) {
      this.taxAmount = newTaxAmount;
    } else {
      // กำหนดให้ displayedTaxAmount เป็น null เมื่อค่าไม่ถูกต้อง
      this.taxAmount = null;
    };
  }

  resetInputs() {
    this.taxAmount = null;
  }

}