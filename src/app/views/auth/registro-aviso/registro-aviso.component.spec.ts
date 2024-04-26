import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAvisoComponent } from './registro-aviso.component';

describe('RegistroAvisoComponent', () => {
  let component: RegistroAvisoComponent;
  let fixture: ComponentFixture<RegistroAvisoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroAvisoComponent]
    });
    fixture = TestBed.createComponent(RegistroAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
