import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploServiceComponent } from './exemplo-service.component';

describe('ExemploServiceComponent', () => {
  let component: ExemploServiceComponent;
  let fixture: ComponentFixture<ExemploServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
