import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasMaestrasComponent } from './tablas-maestras.component';

describe('TablasMaestrasComponent', () => {
  let component: TablasMaestrasComponent;
  let fixture: ComponentFixture<TablasMaestrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablasMaestrasComponent]
    });
    fixture = TestBed.createComponent(TablasMaestrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
