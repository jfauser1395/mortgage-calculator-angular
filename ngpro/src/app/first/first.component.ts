import { Component, inject } from '@angular/core';
import { MonthlyMortgageCalculationService } from '../services/monthly-mortgage-calculation.service';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  template:`<div>New COSTS!!!!!: {{monthlyCosts}}</div>`,
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  private monthlyMortgageCalculationService = inject(MonthlyMortgageCalculationService);
  monthlyCosts = this.monthlyMortgageCalculationService.monthlyMortgagePayment(4, 23, 4)
}
