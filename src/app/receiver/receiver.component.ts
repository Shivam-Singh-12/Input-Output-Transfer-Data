import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  // template: `
  //   <div>
  //     <h2>Data received in ReceiverComponent:</h2>
  //     <pre>{{ receivedData | json }}</pre>
  //   </div>
  // `,
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent {
  receivedData: any;
  receivedDataHere: string = '';

  serviceClicked = false
  subjectClicked = true

  constructor(private dataService: DataService) {
    
  }
  @Input() receivedDataa: string = '';
  ngOnInit() {
    this.receivedData = this.dataService.getData();
    this.serviceClicked = true
    this.subjectClicked = true
    
    this.dataService.data$.subscribe((data) => {
      this.receivedDataa = data;
    });
  }
}
