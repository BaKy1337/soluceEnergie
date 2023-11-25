import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VosAidesComponent } from './vos-aides.component';

describe('VosAidesComponent', () => {
  let component: VosAidesComponent;
  let fixture: ComponentFixture<VosAidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VosAidesComponent]
    });
    fixture = TestBed.createComponent(VosAidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
