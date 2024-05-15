import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContraseniaLayoutComponent } from './recuperar-contrasenia-layout.component';

describe('RecuperarContraseniaLayoutComponent', () => {
  let component: RecuperarContraseniaLayoutComponent;
  let fixture: ComponentFixture<RecuperarContraseniaLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarContraseniaLayoutComponent]
    });
    fixture = TestBed.createComponent(RecuperarContraseniaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
