import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosComponent } from './articulos.component';

describe('ArticulosComponent', () => {
  let component: ArticulosComponent;
  let fixture: ComponentFixture<ArticulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticulosComponent]
    });
    fixture = TestBed.createComponent(ArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
