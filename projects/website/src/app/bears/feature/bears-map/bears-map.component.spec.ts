import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearsMapComponent } from './bears-map.component';

describe('BearsMapComponent', () => {
  let component: BearsMapComponent;
  let fixture: ComponentFixture<BearsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BearsMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BearsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
