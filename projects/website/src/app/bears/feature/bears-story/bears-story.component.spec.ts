import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearsStoryComponent } from './bears-story.component';

describe('BearsStoryComponent', () => {
  let component: BearsStoryComponent;
  let fixture: ComponentFixture<BearsStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BearsStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BearsStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
