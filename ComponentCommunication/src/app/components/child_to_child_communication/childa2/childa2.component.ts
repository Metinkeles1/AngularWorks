import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childa2',
  template: `
  <p> child a 2 component</p>
  `,
})
export class Childa2Component implements OnInit {

  @Output() data: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.data.emit("child a2 den gelen veri...");
  }
}
