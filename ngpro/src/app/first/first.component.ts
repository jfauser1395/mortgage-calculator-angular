import { Component, inject } from '@angular/core';
import { MonthlyMortgageCalculationService } from '../monthly-mortgage-calculation.service';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  private monthlyMortgageCalculationService = inject(MonthlyMortgageCalculationService);
  monthlyCosts = this.monthlyMortgageCalculationService.monthlyMortgagePayment(4, 23, 4)
}
