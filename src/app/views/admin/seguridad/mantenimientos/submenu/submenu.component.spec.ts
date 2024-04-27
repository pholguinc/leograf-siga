import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuComponent } from './submenu.component';

describe('SubmenuComponent', () => {
  let component: SubmenuComponent;
  let fixture: ComponentFixture<SubmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmenuComponent]
    });
    fixture = TestBed.createComponent(SubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
