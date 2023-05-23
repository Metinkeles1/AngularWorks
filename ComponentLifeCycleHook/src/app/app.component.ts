import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-example data="merhaba">ngcontent</app-example>
  `,
})
export class AppComponent {
  title = 'ComponentLifeCycleHook';
}
