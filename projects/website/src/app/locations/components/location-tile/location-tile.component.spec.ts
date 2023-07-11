import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTileComponent } from './location-tile.component';

describe('LocationTileComponent', () => {
  let component: LocationTileComponent;
  let fixture: ComponentFixture<LocationTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
