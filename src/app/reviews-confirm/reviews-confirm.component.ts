import { Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { SharedService } from '../shared/shared-service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TaxDataModalComponent } from '../tax-data-modal/tax-data-modal.component';



@Component({
  selector: 'app-reviews-confirm',
  templateUrl: './reviews-confirm.component.html',
  styleUrls: ['./reviews-confirm.component.css']
})
export class ReviewsConfirmComponent implements OnInit {

  //data:{ key: string; value: any }[] = []
  filingType! : string 
  year! : string 
  month! : string 
  saleAmount! :number;
  taxAmount : number | null = null;
  surcharge : number | null = null;
  penalty  : number | null = null;
  totalAmount : number | null = null;

    //constructor(private _service: SharedService) { 
      // this._service.data$.subscribe(newData => {
      //   this.data = newData;
      // })
    
    //}

  ngOnInit() {
    this._service.selectedYear$.subscribe((year) => {
      this.year = year;
    });

    this._service.selectedMonth$.subscribe((month) => {
      this.month = month;
    });
    
  }

  private selectedfilingTypeSubscription: Subscription;
  private selectedMonthSubscription: Subscription;
  private selectedYearSubscription: Subscription;
  private selectedsaleAmountSubscription: Subscription;
  private selectedtaxAmountSubscription: Subscription;
  private selectedSurchargeSubscription: Subscription;
  private selectedPenaltySubscription: Subscription;
  private selectedTotalAmountSubscription: Subscription;


  constructor(private _service: SharedService,private _modalService: MatDialog,) { 
    console.log(this.taxAmount)
    //console.log(this.filingType);
    this.selectedMonthSubscription = this._service.selectedMonth$.subscribe(monthvalue => {
      this.month = monthvalue;
    });
    this.selectedYearSubscription = this._service.selectedYear$.subscribe(yearvalue => {
      this.year = yearvalue;
    });
    this.selectedfilingTypeSubscription = this._service.selectedfilingType$.subscribe(filingTypevalue => {
      this.filingType = filingTypevalue;
    });
    this.selectedsaleAmountSubscription = this._service.selectedsaleAmount$.subscribe(saleAmountvalue => {
      this.saleAmount = saleAmountvalue;
    });
    this.selectedtaxAmountSubscription = this._service.selectedtaxAmount$.subscribe(taxAmountvalue => {
      this.taxAmount = taxAmountvalue;
    });
    this.selectedSurchargeSubscription = this._service.selectedSurcharge$.subscribe(surchargevalue => {
      this.surcharge = surchargevalue;
    });
    this.selectedPenaltySubscription = this._service.selectedPenalty$.subscribe(penaltyvalue => {
      this.penalty = penaltyvalue;
    });
    this.selectedTotalAmountSubscription = this._service.selectedTotalAmount$.subscribe(totalAmountvalue => {
      this.totalAmount = totalAmountvalue;
    });
  }
  

  ngOnDestroy() {
    this.selectedfilingTypeSubscription.unsubscribe();
    this.selectedMonthSubscription.unsubscribe();
    this.selectedYearSubscription.unsubscribe();
    this.selectedsaleAmountSubscription.unsubscribe();
    this.selectedtaxAmountSubscription.unsubscribe();
    this.selectedSurchargeSubscription.unsubscribe();
    this.selectedPenaltySubscription.unsubscribe();
    this.selectedTotalAmountSubscription.unsubscribe();

  
  }

  _ModalRef: any;

  openTaxModal(){
    this._ModalRef = this._modalService.open(TaxDataModalComponent);
  }

  sendData() {
    const TaxData = {
      filingType: this.filingType,
      month: this.month,
      year: this.year,
      saleAmount: this.saleAmount,
      taxAmount: this.taxAmount,
      surcharge: this.surcharge,
      penalty: this.penalty,
      totalAmount: this.totalAmount

    };
    this._service.updateJsonData(TaxData);
  }


  confirmAndSubmit() {
    this.openTaxModal(); // เรียกฟังก์ชันเปิด Modal ก่อน
    this.sendData(); // เรียกฟังก์ชันส่งข้อมูลหลังจากเปิด Modal
  }


}
