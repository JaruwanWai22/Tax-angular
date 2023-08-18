import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../shared/shared-service';

@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.css']
})
export class FilingTypeComponent implements OnInit {

  filingType: string = '0';
  constructor(private _service: SharedService) {
    //this.filingvalue = '0'
    //this.filingType = '0'
      //console.log(this.filingType);
  }

  filingTypeValueMapping: { [key: string]: string } = {
    '0': 'Ordinary Filing',
    '1': 'Additional Filing',

  };

  get selectedfilingType(): string {
    return this.filingTypeValueMapping[this.filingType];
  }


  ngOnInit(): void {
    
  }

  

  //@Output() _filing = new EventEmitter<string>();

  Data(){
    //this._filing.emit(this.filingType)
    this._service.updateSelectedfilingType(this.selectedfilingType);
    
  }
  
  
  
  // public set filingvalue(value: String) {
  //     if (value === '0') {
  //       this.filingType = 'Ordinary Filing';
  //     } 
  //     else if(value === '1'){
  //       this.filingType = 'Additional Filing';
  //     }
  // }

  

}
