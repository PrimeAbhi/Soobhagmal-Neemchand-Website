import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersetupComponent } from './mastersetup.component';

describe('MastersetupComponent', () => {
  let component: MastersetupComponent;
  let fixture: ComponentFixture<MastersetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
