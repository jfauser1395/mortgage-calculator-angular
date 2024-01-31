import { TestBed } from '@angular/core/testing';

import { MonthlyMortgageCalculationService } from './monthly-mortgage-calculation.service';

describe('MonthlyMortgageCalculationService', () => {
  let service: MonthlyMortgageCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthlyMortgageCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
