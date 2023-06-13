import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearDetailComponent } from './bear-detail.component';

describe('BearDetailComponent', () => {
  let component: BearDetailComponent;
  let fixture: ComponentFixture<BearDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BearDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BearDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
