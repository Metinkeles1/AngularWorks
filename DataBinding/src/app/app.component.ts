import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <app-home [pageName]="title"></app-home>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DataBinding';
}
