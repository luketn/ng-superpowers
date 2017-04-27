import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
             Current time: {{currentDate}}
             <button (click)='refreshTime()'>Refresh</button>
             <br/>
             <label for='titleChange'>Change title:</label>
             <input id='titleChange' [(ngModel)]='title'/>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular SuperPowers';
  currentDate: Date = new Date();

  refreshTime() {
    this.currentDate = new Date();
  }
}
