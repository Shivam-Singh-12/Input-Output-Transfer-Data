import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  // template: `
  //   <br>
  //    <div>
  //     <input [(ngModel)]="data" placeholder="Enter data" />
  //     <button (click)="sendData()">Send Data</button>
  //   </div>
  // `,
  styleUrls: ['./sender.component.css']
})
export class SenderComponent {
  data: any;
  constructor(private dataService: DataService, private router: Router) {}

  sendData() {
    this.dataService.setData(this.data);
    this.router.navigate(['/receiver']);
  }
}
