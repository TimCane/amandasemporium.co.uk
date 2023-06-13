import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingLinkComponent } from './outgoing-link.component';

describe('OutgoingLinkComponent', () => {
  let component: OutgoingLinkComponent;
  let fixture: ComponentFixture<OutgoingLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutgoingLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutgoingLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
