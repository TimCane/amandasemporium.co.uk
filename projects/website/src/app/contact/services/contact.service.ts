import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EnvironmentService } from '../../shared/services/environment.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(
    private http: HttpClient,
    private environment: EnvironmentService
  ) {}

  submitForm(
    name: string,
    email: string,
    message: string
  ): Observable<boolean> {
    return this.http
      .post(`https://submit-form.com/${this.environment.contactFormKey}`, {
        name: name,
        email: email,
        message: message,
      })
      .pipe(map((d) => true));
  }
}
