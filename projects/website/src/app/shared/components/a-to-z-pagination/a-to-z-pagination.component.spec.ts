import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AToZPaginationComponent } from './a-to-z-pagination.component';

describe('AToZPaginationComponent', () => {
  let component: AToZPaginationComponent;
  let fixture: ComponentFixture<AToZPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AToZPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AToZPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
