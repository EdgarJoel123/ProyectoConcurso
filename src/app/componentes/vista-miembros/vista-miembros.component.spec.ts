import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMiembrosComponent } from './vista-miembros.component';

describe('VistaMiembrosComponent', () => {
  let component: VistaMiembrosComponent;
  let fixture: ComponentFixture<VistaMiembrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaMiembrosComponent]
    });
    fixture = TestBed.createComponent(VistaMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
