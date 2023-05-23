import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <div *appCustomif="true">
    merhaba
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StructuralDirective';
}
