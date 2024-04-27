import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMenusComponent } from './modal-menus.component';

describe('ModalMenusComponent', () => {
  let component: ModalMenusComponent;
  let fixture: ComponentFixture<ModalMenusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalMenusComponent]
    });
    fixture = TestBed.createComponent(ModalMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
