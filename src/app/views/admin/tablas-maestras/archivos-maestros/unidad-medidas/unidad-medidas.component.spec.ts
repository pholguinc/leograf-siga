import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadMedidasComponent } from './unidad-medidas.component';

describe('UnidadMedidasComponent', () => {
  let component: UnidadMedidasComponent;
  let fixture: ComponentFixture<UnidadMedidasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnidadMedidasComponent]
    });
    fixture = TestBed.createComponent(UnidadMedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
