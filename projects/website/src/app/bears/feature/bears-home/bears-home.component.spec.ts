import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearsHomeComponent } from './bears-home.component';

describe('BearsHomeComponent', () => {
  let component: BearsHomeComponent;
  let fixture: ComponentFixture<BearsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BearsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BearsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
