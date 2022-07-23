import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleClienteComponent } from './toggle-cliente.component';

describe('ToggleClienteComponent', () => {
  let component: ToggleClienteComponent;
  let fixture: ComponentFixture<ToggleClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
