import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <div appExample color="blue">
    merhaba
  </div>

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //*


  title = 'CustomDirectives';
}
