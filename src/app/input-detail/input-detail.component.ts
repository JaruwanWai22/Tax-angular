import { Component, EventEmitter, AfterViewInit, OnInit, Output, Input ,} from '@angular/core';
import { FilingTypeComponent } from '../filing-type/filing-type.component';
import { SharedService } from '../shared/shared-service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-input-detail',
  templateUrl: './input-detail.component.html',
  styleUrls: ['./input-detail.component.css']
})
export class InputDetailComponent implements OnInit{

  //@Output() nameEmitter = new EventEmitter < string > ();


  filingType!: string;
  month!:string
  year!:string
  saleAmount!:number;
  taxAmount!:number;
  totalAmount: number | null= null;
  


  constructor(private _service: SharedService,) { 
  }


  ngOnInit() {
    this._service.selectedfilingType$.subscribe((filingType: string) => {
      this.filingType = filingType;
      this.Data()
    });
  }

  Data(){
    console.log(this.filingType);

  }

  NextBtn(){
    // this.filingType = this.child.filingType
     console.log(this.filingType);
     console.log(this.month);
     console.log(this.year);
     console.log(this.saleAmount);
     //console.log(this.taxAmount);
    //  this._service.sendData('Type of filing', this.filingType)
    //  this._service.sendData('VAT Month1', this.month)
    //  this._service.sendData('VAT Month2', this.year)
    // console.log(this.child.filingType);
    
    
  }


}
