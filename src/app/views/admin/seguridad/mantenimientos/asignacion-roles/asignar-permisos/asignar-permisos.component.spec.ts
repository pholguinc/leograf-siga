import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarPermisosComponent } from './asignar-permisos.component';

describe('AsignarPermisosComponent', () => {
  let component: AsignarPermisosComponent;
  let fixture: ComponentFixture<AsignarPermisosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarPermisosComponent]
    });
    fixture = TestBed.createComponent(AsignarPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
