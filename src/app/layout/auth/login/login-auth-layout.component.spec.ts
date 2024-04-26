import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAuthLayoutComponent } from './login-auth-layout.component';

describe('LoginAuthLayoutComponent', () => {
  let component: LoginAuthLayoutComponent;
  let fixture: ComponentFixture<LoginAuthLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAuthLayoutComponent],
    });
    fixture = TestBed.createComponent(LoginAuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
