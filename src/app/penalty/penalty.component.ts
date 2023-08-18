import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared-service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent implements OnInit {


  constructor(private _service: SharedService) { }

  penalty: number | null = null;
  filingType: string | null = null;

  formatAmount() {
    if (this.penalty !== null) {
      this.penalty = parseFloat(this.penalty.toFixed(2)); // Format amount
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
      switchMap((penalty: number | null) => {
        this.penalty = penalty;
        return this._service.selectedfilingType$;
      })
    ).subscribe((filingType: string | null) => {
      this.filingType = filingType;
        this.calculatePenalty();
    });
    this.updateDisplayedPenalty()
    this.resetInputs()
  }


  updateDisplayedPenalty() {
    if (this.penalty === 200 || this.penalty === 0) {
      this.penalty = null;
    }
  }

  calculatePenalty() {
    if (this.filingType === '1' || this.filingType === 'Additional Filing') {
      this.penalty = 200.00;
    } else if (this.filingType === '0' || this.filingType === 'Ordinary Filing') {
      this.penalty = 0.00;
    }
    this._service.updateSelectedPenalty(this.penalty);
    
  }

  onPenaltyChange(newValue: string) {
    const newPenalty = parseFloat(newValue);
    if (!isNaN(newPenalty)) {
      this.penalty = newPenalty;
    } else {
      // กำหนดให้ displayedTaxAmount เป็น null เมื่อค่าไม่ถูกต้อง
      this.penalty = null;
    }

    
  }

  resetInputs() {
    this.penalty = null;
  }
  
}
