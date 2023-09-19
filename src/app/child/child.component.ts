import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

  @Input() messageFromParent: string = "";
  @Output() messageToParent = new EventEmitter<{ message1: string, message2: string }>();

  sendMessageToParent() {
    const message1 = "Hello Parent1!";
    const message2 = "Hello Parent2!";
    this.messageToParent.emit({ message1, message2 });
  }
  constructor() { }

  ngOnInit() {
  }
  
  executeFunction(){
    console.log("Executing Child")
    return "Hello Shivam this is TS of child testing for change detection";
  }

}
