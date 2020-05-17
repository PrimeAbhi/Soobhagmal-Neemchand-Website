import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoudaComponent } from './souda.component';

describe('SoudaComponent', () => {
  let component: SoudaComponent;
  let fixture: ComponentFixture<SoudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
