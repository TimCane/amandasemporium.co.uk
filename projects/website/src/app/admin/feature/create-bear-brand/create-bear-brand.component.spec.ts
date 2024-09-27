import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBearBrandComponent } from './create-bear-brand.component';

describe('CreateBearBrandComponent', () => {
  let component: CreateBearBrandComponent;
  let fixture: ComponentFixture<CreateBearBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBearBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBearBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
