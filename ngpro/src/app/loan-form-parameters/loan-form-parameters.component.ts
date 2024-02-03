import { Component, inject } from '@angular/core';
import { MonthlyMortgageCalculationService } from '../services/monthly-mortgage-calculation.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-loan-form-parameters',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './loan-form-parameters.component.html',
  styleUrl: './loan-form-parameters.component.scss'
})
export class LoanFormParametersComponent {
  colorControl = new FormControl('primary' as ThemePalette);
  private monthlyMortgageCalculationService = inject(MonthlyMortgageCalculationService);
  monthlyCosts = this.monthlyMortgageCalculationService.monthlyMortgagePayment(4, 23, 4)
}
