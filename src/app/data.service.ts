import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: any;

  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  // Subject to transfer data
  private dataSubject = new BehaviorSubject<string>('');
  public data$ = this.dataSubject.asObservable();
  // private dataSubject = new Subject<string>();
  sendData(data: string) {
    this.dataSubject.next(data);
  }

  receiveData() {
    return this.dataSubject.asObservable();
  }
}
