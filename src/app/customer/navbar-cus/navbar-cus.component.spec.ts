import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCusComponent } from './navbar-cus.component';

describe('NavbarCusComponent', () => {
  let component: NavbarCusComponent;
  let fixture: ComponentFixture<NavbarCusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
