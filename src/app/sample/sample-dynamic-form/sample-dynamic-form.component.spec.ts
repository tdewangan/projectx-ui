import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDynamicFormComponent } from './sample-dynamic-form.component';

describe('SampleDynamicFormComponent', () => {
  let component: SampleDynamicFormComponent;
  let fixture: ComponentFixture<SampleDynamicFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleDynamicFormComponent]
    });
    fixture = TestBed.createComponent(SampleDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
