import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsecurePageComponent } from './unsecure-page.component';

describe('UnsecurePageComponent', () => {
  let component: UnsecurePageComponent;
  let fixture: ComponentFixture<UnsecurePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsecurePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsecurePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
