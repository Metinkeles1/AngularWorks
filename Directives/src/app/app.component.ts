import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `

    <!-- ngFor directives -->
    <!-- <ul>
      <li *ngFor="let item of names;
                                    let i = index;
                                    let isFirst = first;
                                    let isLast = last;
                                    let isEven = even;
                                    let isOdd = odd;">{{i}}, {{item}}, {{isFirst}}, {{isLast}},{{isEven}},{{isOdd}}</li>
    </ul> -->

    <!-- *ngIf -->
    <!-- <div *ngIf="visible">ngif</div>
    <div *ngIf="visible;else elseContent">merhaba</div>
    <ng-template #elseContent>
      içerik 2
    </ng-template> -->

    <!-- ngSwitch -->
    <!-- <div [ngSwitch]="sayi">
        <div *ngSwitchCase="1">sayi 1</div>
        <div *ngSwitchCase="2">sayi 1</div>
        <div *ngSwitchCDefault>hiçbiri</div>
    </div> -->



  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  names: string[] = ["name1", "name2", "name3", "name4"]
  visible: boolean = false;
  sayi: number = 1;
}
