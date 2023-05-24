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
      <div formGroupName="address">
        <input type="text" placeholder="country" formControlName="country"><br/>
        <input type="text" placeholder="city" formControlName="city"><br/>
        <input type="text" placeholder="address" formControlName="address"><br/>
      </div>
      <button>send</button>
    </form>

    <button (click)="ok()">ok</button>
    valid : {{frm.valid}}
  `
})
export class AppComponent {
  frm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ["default value"],
      surname: ["", Validators.required],
      email: [""],
      tel: [""],
      address: formBuilder.group({
        country: [""],
        city: [""],
        address: [""]
      })
    })

    this.frm.get("surname").valueChanges.subscribe({
      next: data => {
        console.log(data);
      }
    })
  }

  ok() {
    this.frm.get("surname").setValue("Metin", { onlySelf: true })
  }

  onSubmit() {
    console.log(this.frm.value);
  }
}
