import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from '../shared/shared-service';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {


  ngOnInit(): void {
    //this.year = this._service.getSelectedYear();
  }

  // @Output() _year = new EventEmitter<string>();

  Data(){
     //this._year.emit(this.year)
     this._service.updateSelectedYear(this.year);
   }

  year! : string;
  
  constructor(private _service: SharedService) {}

  // onYearSelected() {
  //   this._service.updateSelectedYear(this.year);
  // }

  years: string[] = ['2020', '2021', '2022', '2023'];

  // onYearChange() {
  //   this._service.setSelectedYear(this.year);
  //   // Update selected month if year is 2023
  //   if (this.year === '2023') {
  //     this._service.setSelectedMonth(this._service.getSelectedMonth());
  //   }
  // }

}
