import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModulosComponent } from './modal-modulos.component';

describe('ModalModulosComponent', () => {
  let component: ModalModulosComponent;
  let fixture: ComponentFixture<ModalModulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalModulosComponent]
    });
    fixture = TestBed.createComponent(ModalModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
