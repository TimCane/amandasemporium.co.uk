import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBearComponent } from './create-bear.component';

describe('CreateBearComponent', () => {
  let component: CreateBearComponent;
  let fixture: ComponentFixture<CreateBearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
