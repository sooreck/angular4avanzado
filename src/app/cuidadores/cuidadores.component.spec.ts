import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadoresComponent } from './cuidadores.component';

describe('CuidadoresComponent', () => {
  let component: CuidadoresComponent;
  let fixture: ComponentFixture<CuidadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuidadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
