import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myEvent(data) {
    alert("Angularjs 5");
    console.log(data);
  }
}
