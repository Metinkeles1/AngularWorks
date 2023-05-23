import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <p>child works!</p>
  {{childData}}
  `,
})
export class ChildComponent {
  @Input() childData: any;
}
