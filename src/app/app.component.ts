import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TransferData';

  messageTochild = 'Hello Child.....................!';
  writeMsgInParentTS = "Child1 Hello Again.............!";
  // P to C @Output()
  messageFromChild1 = '';
  messageFromChild2 = '';

  handleMessageFromChild(messages: { message1: string; message2: string }) {
    this.messageFromChild1 = messages.message1;
    this.messageFromChild2 = messages.message2;
  }

  //
  inputText = '';
  submittedTexts: string[] = [];

  onKeyUp(event: KeyboardEvent) {
    this.inputText = (event.target as HTMLInputElement).value;
  }

  submitInput() {
    if (this.inputText) {
      this.submittedTexts.push(this.inputText);
      this.inputText = ''; // Clear the input field after submission
    }
  }
}
