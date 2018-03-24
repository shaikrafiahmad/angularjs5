import { Component } from '@angular/core';
import { saveAs } from 'file-saver'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myEvent(data) {
    alert(data);
    var blob = new window.Blob(["HELLO"], {type:"application/pdf"});
    saveAs(blob, "test.pdf")
  }
}
