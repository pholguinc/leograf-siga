import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFileUploadedComponent } from './app-file-uploaded.component';

describe('AppFileUploadedComponent', () => {
  let component: AppFileUploadedComponent;
  let fixture: ComponentFixture<AppFileUploadedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppFileUploadedComponent]
    });
    fixture = TestBed.createComponent(AppFileUploadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
