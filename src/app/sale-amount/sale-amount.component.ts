import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared-service';


@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.css']
})
export class SaleAmountComponent implements OnInit {

  constructor(private _service: SharedService) { }

  ngOnInit(): void {
  }

  saleAmount!: number // Initialize with a default value


  formatAmount() {
    if (this.saleAmount !== null) {
      this.saleAmount = parseFloat(this.saleAmount.toFixed(2)); // Format amount
    }
  }

  onInputKeyPress(event: KeyboardEvent) {
    const inputChar = event.key;
    if (!/^\d*\.?\d*$/.test(inputChar)) {
      event.preventDefault();
    }
  }
  

  Data(){
    this._service.updateSelectedsaleAmount(this.saleAmount);
  }


  

}
