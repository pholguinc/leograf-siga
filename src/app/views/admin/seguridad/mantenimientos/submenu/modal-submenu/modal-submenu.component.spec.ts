import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSubmenuComponent } from './modal-submenu.component';

describe('ModalSubmenuComponent', () => {
  let component: ModalSubmenuComponent;
  let fixture: ComponentFixture<ModalSubmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSubmenuComponent]
    });
    fixture = TestBed.createComponent(ModalSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
