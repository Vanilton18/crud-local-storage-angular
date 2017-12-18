import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo5ManipulationDomComponent } from './exemplo5-manipulation-dom.component';

describe('Exemplo5ManipulationDomComponent', () => {
  let component: Exemplo5ManipulationDomComponent;
  let fixture: ComponentFixture<Exemplo5ManipulationDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemplo5ManipulationDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exemplo5ManipulationDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
