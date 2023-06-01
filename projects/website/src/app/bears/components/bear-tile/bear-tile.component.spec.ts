import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearTileComponent } from './bear-tile.component';

describe('BearTileComponent', () => {
  let component: BearTileComponent;
  let fixture: ComponentFixture<BearTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BearTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BearTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
