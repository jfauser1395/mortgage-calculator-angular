import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MonthlyMortgageCalculationService } from './monthly-mortgage-calculation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private monthlyMortgageCalculationService = inject(MonthlyMortgageCalculationService);
  monthlyCosts = this.monthlyMortgageCalculationService.monthlyMortgagePayment(4, 23, 4)
}
