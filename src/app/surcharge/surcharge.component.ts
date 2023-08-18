import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared-service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.css']
})
export class SurchargeComponent implements OnInit {

  constructor(private _service: SharedService) { }

  surcharge: number | null = null;
  taxAmount: number | null= null;
  filingType: string | null = null;



  formatAmount() {
    if (this.surcharge !== null) {
      this.surcharge = parseFloat(this.surcharge.toFixed(2)); // Format amount
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
      switchMap((amount: number | null) => {
        this.taxAmount = amount;
        return this._service.selectedfilingType$;
      })
    ).subscribe((filingType: string | null) => {
      this.filingType = filingType;
      this.calculateSurcharge();
    });
    
    this.updateDisplayedSurcharge(); // เรียกใช้เมื่อคอมโพเนนต์ถูกสร้างเพื่อกำหนดค่าเริ่มต้น
    this.resetInputs()
  }

  


  updateDisplayedSurcharge() {
    this.surcharge = this.surcharge === 0 ? null : this.surcharge;

  }

  calculateSurcharge() {
    if (this.taxAmount !== null) {
      if (this.filingType === '1' || this.filingType === 'Additional Filing'){
        this.surcharge = parseFloat((this.taxAmount * 0.1).toFixed(2));;

      }
    }
      if (this.filingType === '0' || this.filingType === 'Ordinary Filing') {
        this.surcharge = 0;
      }
  
    this._service.updateSelectedSurcharge(this.surcharge);
  }

  onSurchargeChange(newValue: string) {
    const newSurcharge = parseFloat(newValue);
    if (!isNaN(newSurcharge)) {
      this.surcharge = newSurcharge;
    } else {
      // กำหนดให้ displayedTaxAmount เป็น null เมื่อค่าไม่ถูกต้อง
      this.surcharge = null;
    }
  }
  
  formatNumber(value: number | null): string {
    if (value !== null) {
      return value.toFixed(2);
    }
    return ''; // หรืออาจเป็น '0.00' ถ้าคุณต้องการให้แสดง 0.00 เมื่อเป็น null
  }

  resetInputs() {
    this.surcharge = null;
  }


}
