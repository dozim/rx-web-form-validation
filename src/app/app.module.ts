import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule, ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { AppComponent } from './app.component';

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
