import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared/shared-service';


@Component({
  selector: 'app-tax-data-modal',
  templateUrl: './tax-data-modal.component.html',
  styleUrls: ['./tax-data-modal.component.css']
})
export class TaxDataModalComponent implements OnInit {

  public _modalRef!: MatDialogRef<TaxDataModalComponent>;

  filingType!: string 
  year!: string 
  month! : string 
  saleAmount!:any;

  TaxData: any;

  constructor(private _service: SharedService) {}

  ngOnInit() {
    this._service.jsonData$.subscribe(data => {
      this.TaxData = data;
    });
  }
}
