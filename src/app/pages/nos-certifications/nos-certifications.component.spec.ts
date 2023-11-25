import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosCertificationsComponent } from './nos-certifications.component';

describe('NosCertificationsComponent', () => {
  let component: NosCertificationsComponent;
  let fixture: ComponentFixture<NosCertificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NosCertificationsComponent]
    });
    fixture = TestBed.createComponent(NosCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
