import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule, ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { AppComponent } from './app.component';
import { Person } from './person';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  exports: [
    Person
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    ReactiveFormConfig.set({
      validationMessage: {
        required: 'This field is required.',
        alpha: 'Only characters are allowed.',
        digit: 'Only numbers are allowed.',
        minLength: 'minimum length is {{1}}',
        maxLength: 'allowed max length is {{1}}'
      }
    });
  }
}
