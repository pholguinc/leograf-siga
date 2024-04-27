import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionRolesComponent } from './asignacion-roles.component';

describe('AsignacionRolesComponent', () => {
  let component: AsignacionRolesComponent;
  let fixture: ComponentFixture<AsignacionRolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignacionRolesComponent]
    });
    fixture = TestBed.createComponent(AsignacionRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
