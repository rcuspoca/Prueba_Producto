import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaClientesComponent } from './venta-clientes.component';

describe('VentaClientesComponent', () => {
  let component: VentaClientesComponent;
  let fixture: ComponentFixture<VentaClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
