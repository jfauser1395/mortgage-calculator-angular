import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanFormParametersComponent } from './loan-form-parameters.component';

describe('LoanFormParametersComponent', () => {
  let component: LoanFormParametersComponent;
  let fixture: ComponentFixture<LoanFormParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanFormParametersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoanFormParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
