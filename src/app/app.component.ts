import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder, RxFormGroup, IFormGroup } from '@rxweb/reactive-form-validators';
import { Person } from 'src/app/person';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'rx-web-demo';

  formGroup: IFormGroup<Person>;

  constructor(
    private formBuilder: RxFormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.formGroup(Person) as IFormGroup<Person>;
  }

  printControls(): string {
    console.log(this.formGroup.controls);
    return JSON.stringify(this.formGroup.value);
  }
}
