import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoodleCardComponent } from './noodle-card.component';

describe('NoodleCardComponent', () => {
  let component: NoodleCardComponent;
  let fixture: ComponentFixture<NoodleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoodleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoodleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
