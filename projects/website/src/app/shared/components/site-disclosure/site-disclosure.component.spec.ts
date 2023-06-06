import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDisclosureComponent } from './site-disclosure.component';

describe('SiteDisclosureComponent', () => {
  let component: SiteDisclosureComponent;
  let fixture: ComponentFixture<SiteDisclosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteDisclosureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
