import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
  example
  `,
})
export class ExampleComponent implements OnChanges {
  @Input() data: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngonchanges");
  }

}
