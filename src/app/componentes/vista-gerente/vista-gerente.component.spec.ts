import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaGerenteComponent } from './vista-gerente.component';

describe('VistaGerenteComponent', () => {
  let component: VistaGerenteComponent;
  let fixture: ComponentFixture<VistaGerenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaGerenteComponent]
    });
    fixture = TestBed.createComponent(VistaGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
