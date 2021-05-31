import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbartopComponent } from './navbartop.component';

describe('NavbartopComponent', () => {
  let component: NavbartopComponent;
  let fixture: ComponentFixture<NavbartopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbartopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbartopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
