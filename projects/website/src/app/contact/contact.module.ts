import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactEffects } from './state/contact.effects';
import { contactReducer } from './state/contact.reducer';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    StoreModule.forFeature('contactFeature', contactReducer),
    EffectsModule.forFeature([ContactEffects]),
  ],
})
export class ContactModule {}
