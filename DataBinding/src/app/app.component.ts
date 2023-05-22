import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <!-- Property binding -->
    <!-- <app-home [pageName]="title"></app-home> -->

    <!-- Event Binding -->
    <!-- <button (click)="btnClick()">Click</button> -->

    <!-- Two-Way Data Binding -->
    <input type="text" [(ngModel)] = "name"><br><br>
    <input type="text" [(ngModel)] = "name"><br><br>
    {{name}}
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DataBinding';

  name: string;

  btnClick() {
    alert("click");
  }
}
