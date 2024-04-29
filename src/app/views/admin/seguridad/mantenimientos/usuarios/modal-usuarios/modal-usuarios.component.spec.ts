import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUsuariosComponent } from './modal-usuarios.component';

describe('ModalUsuariosComponent', () => {
  let component: ModalUsuariosComponent;
  let fixture: ComponentFixture<ModalUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalUsuariosComponent]
    });
    fixture = TestBed.createComponent(ModalUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
