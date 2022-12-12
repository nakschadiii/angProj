import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShitOneComponent } from './shit-one.component';

describe('ShitOneComponent', () => {
  let component: ShitOneComponent;
  let fixture: ComponentFixture<ShitOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShitOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShitOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
