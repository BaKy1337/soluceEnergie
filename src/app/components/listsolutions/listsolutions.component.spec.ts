import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsolutionsComponent } from './listsolutions.component';

describe('ListsolutionsComponent', () => {
  let component: ListsolutionsComponent;
  let fixture: ComponentFixture<ListsolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListsolutionsComponent]
    });
    fixture = TestBed.createComponent(ListsolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
