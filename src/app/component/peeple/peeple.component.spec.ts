import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeepleComponent } from './peeple.component';

describe('PeepleComponent', () => {
  let component: PeepleComponent;
  let fixture: ComponentFixture<PeepleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeepleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeepleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
