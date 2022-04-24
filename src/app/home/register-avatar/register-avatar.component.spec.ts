import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAvatarComponent } from './register-avatar.component';

describe('RegisterAvatarComponent', () => {
  let component: RegisterAvatarComponent;
  let fixture: ComponentFixture<RegisterAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
