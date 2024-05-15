import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRecuperarContraseniaComponent } from './modal-recuperar-contrasenia.component';

describe('ModalRecuperarContraseniaComponent', () => {
  let component: ModalRecuperarContraseniaComponent;
  let fixture: ComponentFixture<ModalRecuperarContraseniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRecuperarContraseniaComponent]
    });
    fixture = TestBed.createComponent(ModalRecuperarContraseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
