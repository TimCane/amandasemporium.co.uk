import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { IContactFormGroup } from '../../interfaces/contact.form-group';
import { submitForm } from '../../state/contact.actions';
import { selectIsLoading, selectSuccess } from '../../state/contact.selectors';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  public success$ = this.store.select(selectSuccess);
  public isLoading$ = this.store.select(selectIsLoading);

  contactForm: IContactFormGroup;

  constructor(fb: FormBuilder, private store: Store<AppState>) {
    this.contactForm = fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    }) as IContactFormGroup;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const val = this.contactForm.value;
      const name = val.name;
      const email = val.email;
      const message = val.message;

      if (name && email && message) {
        this.store.dispatch(submitForm({ name, email, message }));
      }
    }
  }

  ngOnInit(): void {}
}
