import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackGroundComponent } from './back-ground.component';

describe('BackGroundComponent', () => {
  let component: BackGroundComponent;
  let fixture: ComponentFixture<BackGroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackGroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
