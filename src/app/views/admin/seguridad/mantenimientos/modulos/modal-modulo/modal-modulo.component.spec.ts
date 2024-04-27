import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModuloComponent } from './modal-modulo.component';

describe('ModalModuloComponent', () => {
  let component: ModalModuloComponent;
  let fixture: ComponentFixture<ModalModuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalModuloComponent]
    });
    fixture = TestBed.createComponent(ModalModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
