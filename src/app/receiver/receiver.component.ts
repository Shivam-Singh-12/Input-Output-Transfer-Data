import { Component } from '@angular/core';
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

  constructor(private dataService: DataService) {
    
  }
  
  ngOnInit() {
    this.receivedData = this.dataService.getData();
  }
}
