import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBearSpeciesComponent } from './create-bear-species.component';

describe('CreateBearSpeciesComponent', () => {
  let component: CreateBearSpeciesComponent;
  let fixture: ComponentFixture<CreateBearSpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBearSpeciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBearSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
