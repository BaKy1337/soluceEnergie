import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosSolutionsComponent } from './nos-solutions.component';

describe('NosSolutionsComponent', () => {
  let component: NosSolutionsComponent;
  let fixture: ComponentFixture<NosSolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NosSolutionsComponent]
    });
    fixture = TestBed.createComponent(NosSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
