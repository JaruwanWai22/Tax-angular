import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared/shared-service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

 //@Output() _month = new EventEmitter<string>();

  Data(){
    //this._month.emit(this.month)
    this._service.updateSelectedMonth(this.selectedMonth);
  }

  month!: string ; // Default value

  monthValueMapping: { [key: string]: string } = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',

  };

  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  get selectedMonth(): string {
    return this.monthValueMapping[this.month];
  }

  constructor(private _service: SharedService) { 
    console.log(this.month);
    
  }

  ngOnInit() {
    //this.month = this._service.getSelectedMonth();
  }

  formatMonth(month: number): string {
    return month < 10 ? '0' + month : month.toString();
  }

  // isDisabled(month: number): boolean {
  //   return this._service.getSelectedYear() === '2023' && month > new Date().getMonth() + 1;
  // }


  }
  
