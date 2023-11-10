import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListservicesComponent } from './listservices.component';

describe('ListservicesComponent', () => {
  let component: ListservicesComponent;
  let fixture: ComponentFixture<ListservicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListservicesComponent]
    });
    fixture = TestBed.createComponent(ListservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
