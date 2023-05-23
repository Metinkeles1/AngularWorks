import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)">
    <input type="text" name="Name" placeholder="Name" ngModel><br/>
    <input type="text" name="SurName" placeholder="SurName" ngModel><br/>
    <input type="email" name="Email" placeholder="Email" ngModel><br/>
    <input type="tel" name="Tel" placeholder="Tel"><br/>
    <div ngModelGroup="address">
      <input type="text" name="country" placeholder="Country" ngModel><br/>
      <input type="text" name="city" placeholder="City" ngModel><br/>
      <input type="text" name="address" placeholder="Address" ngModel><br/>
    </div>

    <button>send</button>
  </form>
  `,
})
export class AppComponent {
  @ViewChild("frm", { static: true }) frm: NgForm;

  onSubmit(data) {
    console.log(`value: ${this.frm.value}`);
    console.log(`valid: ${this.frm.valid}`);
    console.log(`touched: ${this.frm.touched}`);
    console.log(`submitted: ${this.frm.submitted}`);

    console.log(data);
  }
}
