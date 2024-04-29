import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAsignarPermisosComponent } from './modal-asignar-permisos.component';

describe('ModalAsignarPermisosComponent', () => {
  let component: ModalAsignarPermisosComponent;
  let fixture: ComponentFixture<ModalAsignarPermisosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAsignarPermisosComponent]
    });
    fixture = TestBed.createComponent(ModalAsignarPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
