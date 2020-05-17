import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoudaupdateComponent } from './soudaupdate.component';

describe('SoudaupdateComponent', () => {
  let component: SoudaupdateComponent;
  let fixture: ComponentFixture<SoudaupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoudaupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoudaupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
