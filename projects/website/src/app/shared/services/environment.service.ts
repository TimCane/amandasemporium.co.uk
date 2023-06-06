import { Injectable } from '@angular/core';
import { environment } from 'projects/website/src/environments/environment';
import { IEnvironment } from 'projects/website/src/environments/environment.interface';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService implements IEnvironment {
  constructor() {}
  get googleMapsKey(): string {
    return environment.googleMapsKey;
  }

  get contactFormKey(): string {
    return environment.contactFormKey;
  }

  get production(): boolean {
    return environment.production;
  }

  get clarityProjectId(): string {
    return environment.clarityProjectId;
  }
}
