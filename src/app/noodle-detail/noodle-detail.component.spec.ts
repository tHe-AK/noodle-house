import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoodleDetailComponent } from './noodle-detail.component';

describe('NoodleDetailComponent', () => {
  let component: NoodleDetailComponent;
  let fixture: ComponentFixture<NoodleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoodleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoodleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
