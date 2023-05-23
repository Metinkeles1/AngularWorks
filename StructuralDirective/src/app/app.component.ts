import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <div *appCustomif="true">
    merhaba
  </div>

  <!-- <ul>
    <li *appCustomfor="4; let i=index;">
      metin {{i}}
    </li>
  </ul> -->

  <ul>
    <li *appCustomfor="names; let name; let index = index">
      {{name}} {{index}}
    </li>
  </ul>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StructuralDirective';
  names: string[] = ['Metin', 'keleş', 'pc', 'phone'];
}
