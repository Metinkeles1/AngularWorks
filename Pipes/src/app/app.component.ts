import { Component } from '@angular/core';
import { CustomPipe } from './pipes/custom.pipe';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    {{title | uppercase}}
    <br>
    <!-- parameters pipe -->
    {{title | slice: 1:3}}
    <br>
    {{5 | currency}}
    <br>
    {{"doldur be meyhaneci," | custom : 2: 10}}

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private custom: CustomPipe) {
    console.log(custom.transform("asdfasdfasdf", 2, 5))
  }
  title = 'Pipes';
}
