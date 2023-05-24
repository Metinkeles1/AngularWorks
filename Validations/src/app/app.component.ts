import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="frm" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="name" placeholder="Name"><br/>
      <input type="text" formControlName="surname" placeholder="Surname"><br/>
      <input type="text" formControlName="email" placeholder="Email"><br/>
      <input type="text" formControlName="tel" placeholder="Tel"><br/>
      <button>submit</button>
    </form>
  `,
})
export class AppComponent {
  frm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ["default value"],
      surname: ["", [Validators.required, Validators.minLength(3)]],
      email: [""],
      tel: [""]
    })

  }

  onSubmit() {
    console.log(this.frm.valid);
    console.log(this.frm.value);
  }
}
