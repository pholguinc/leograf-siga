import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContraseniaAvisoComponent } from './recuperar-contrasenia-aviso.component';

describe('RecuperarContraseniaAvisoComponent', () => {
  let component: RecuperarContraseniaAvisoComponent;
  let fixture: ComponentFixture<RecuperarContraseniaAvisoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarContraseniaAvisoComponent]
    });
    fixture = TestBed.createComponent(RecuperarContraseniaAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
