import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonjonsComponent } from './donjons.component';

describe('DonjonsComponent', () => {
  let component: DonjonsComponent;
  let fixture: ComponentFixture<DonjonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonjonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonjonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
