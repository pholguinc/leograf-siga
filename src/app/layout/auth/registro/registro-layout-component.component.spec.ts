import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLayoutComponent } from './registro-layout-component.component';

describe('RegistroLayoutComponent', () => {
  let component: RegistroLayoutComponent;
  let fixture: ComponentFixture<RegistroLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroLayoutComponent]
    });
    fixture = TestBed.createComponent(RegistroLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
