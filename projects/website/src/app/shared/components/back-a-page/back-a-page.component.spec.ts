import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackAPageComponent } from './back-a-page.component';

describe('BackAPageComponent', () => {
  let component: BackAPageComponent;
  let fixture: ComponentFixture<BackAPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackAPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackAPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
