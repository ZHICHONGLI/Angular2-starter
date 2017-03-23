import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login2waydbComponent } from './login-2waydb.component';

describe('Login2waydbComponent', () => {
  let component: Login2waydbComponent;
  let fixture: ComponentFixture<Login2waydbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login2waydbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login2waydbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
