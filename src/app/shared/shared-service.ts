import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // private  sharedService = new BehaviorSubject<{key: string; value: any}[]>([]);
  // data$ = this.sharedService.asObservable();
  

  // sendData(key: string, value: any){
  //   const currentData = this.sharedService.getValue();
  //   const NewDataItem = {key , value};
  //   this.sharedService.next([...currentData,NewDataItem])
  // }

  constructor() { }

  private _selectedfilingType: BehaviorSubject<string> = new BehaviorSubject<string>('Ordinary Filing');
  private _selectedMonthSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private _selectedYearSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private _selectedsaleAmountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private _selectedtaxAmountSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(0);
  private _selectedSurchargeSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(0);
  private _selectedPenaltySubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(0);
  private _selectedTotalAmountSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(0);



  // Observable that emits the selected month
  public selectedfilingType$: Observable<string> = this._selectedfilingType.asObservable();
  public selectedMonth$: Observable<string> = this._selectedMonthSubject.asObservable();
  public selectedYear$: Observable<string> = this._selectedYearSubject.asObservable();
  public selectedsaleAmount$: Observable<number> = this._selectedsaleAmountSubject.asObservable();
  public selectedtaxAmount$: Observable<number | null> = this._selectedtaxAmountSubject.asObservable();
  public selectedSurcharge$: Observable<number | null> = this._selectedSurchargeSubject.asObservable();
  public selectedPenalty$: Observable<number | null> = this._selectedPenaltySubject.asObservable();
  public selectedTotalAmount$: Observable<number | null> = this._selectedTotalAmountSubject.asObservable();

  // Method to update the selected month
  updateSelectedfilingType(filingType:string) {
    this._selectedfilingType.next(filingType);
  }

  updateSelectedMonth(month: string) {
    this._selectedMonthSubject.next(month);
  }

  updateSelectedYear(year: string) {
    this._selectedYearSubject.next(year);
  }

  updateSelectedsaleAmount(saleAmount: number){
    this._selectedsaleAmountSubject.next(saleAmount);
  }

  updateSelectedtaxAmount(taxAmount: number | null){
    this._selectedtaxAmountSubject.next(taxAmount);
  }

  updateSelectedSurcharge(surcharge: number | null){
    this._selectedSurchargeSubject.next(surcharge);
  }

  updateSelectedPenalty(penalty: number | null){
    this._selectedPenaltySubject.next(penalty);
  }

  updateSelectedTotalAmount(totalAmount: number | null){
    this._selectedTotalAmountSubject.next(totalAmount);
  }

  // private year: string = '2023';
  // private month: string = '08';

  // setSelectedYear(year: string) {
  //   this.year = year;
  // }

  // setSelectedMonth(month: string) {
  //   this.month = month;
  // }

  // getSelectedYear(): string {
  //   return this.year;
  // }

  // getSelectedMonth(): string {
  //   return this.month;
  // }


  private jsonDataSubject = new BehaviorSubject<any>(null);
  jsonData$ = this.jsonDataSubject.asObservable();

  updateJsonData(data: any) {
    this.jsonDataSubject.next(data);
  }


}
