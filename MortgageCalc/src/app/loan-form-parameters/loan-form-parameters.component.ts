import { Component, inject } from '@angular/core';
import { MonthlyMortgageCalculationService } from '../services/monthly-mortgage-calculation.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HostListener, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartModule, Chart } from 'angular-highcharts';
import { NgxCurrencyDirective } from 'ngx-currency';
import { NgxCurrencyInputMode } from 'ngx-currency';

@Component({
  selector: 'app-loan-form-parameters',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxCurrencyDirective,
    ChartModule,
  ],
  templateUrl: './loan-form-parameters.component.html',
  styleUrl: './loan-form-parameters.component.scss',
})
export class LoanFormParametersComponent {
  // Form controls for the loan parameters
  principalLoan = new FormControl(null);
  yearlyInterestRate = new FormControl(null);
  numberOfYearsPayments = new FormControl(null);
  downPayment = new FormControl(null);

  // Declare the chart variable
  chart: Chart | undefined;

  // Variable to store the calculated monthly costs
  monthlyCosts: number[] = [];

  // Variable to display the monthly mortgage payment
  monthlyCostsResult!: string;

  //Form submission monitoring
  formSubmitted: boolean = false;

  //Display size monitoring
  isSmallScreen: boolean = false;

  // Injecting the mortgage calculation service
  constructor(
    private monthlyMortgageCalculationService: MonthlyMortgageCalculationService,
  ) {}

  //Change screen size
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  // Method to handle form submission
  onSubmit() {
    // Parsing form control values to numbers
    let pLoan = Number(this.principalLoan.value);
    let yInterestRate = Number(this.yearlyInterestRate.value);
    let nOfYearsPayments = Number(this.numberOfYearsPayments.value);
    let dPayment = Number(this.downPayment.value);

    // Calculating the monthly costs using the mortgage calculation service
    this.monthlyCosts =
      this.monthlyMortgageCalculationService.monthlyMortgagePayment(
        pLoan,
        yInterestRate,
        nOfYearsPayments,
        dPayment,
      );

    //add principal loan to the array
    this.monthlyCosts.push(nOfYearsPayments);
    this.monthlyCosts.push(pLoan);

    this.monthlyCostsResult =
      'Monthly payment: $' + this.monthlyCosts[2].toString();

    //init chart
    this.initChart();

    //initialize form monitoring variable
    this.formSubmitted = true;
  }

  ngOnInit() {
    this.initChart();
    this.makeResponsive();
    this.checkScreenSize();
  }

  // Ngx Currency Input Mode option field
  options = {
    align: 'left',
    prefix: '',
    thousands: ',',
    decimal: '.',
    inputMode: NgxCurrencyInputMode.Natural,
  };

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 768;
  }

  // PieCharm implementation
  initChart() {
    let totalAmountPaid =
      `$${this.monthlyCosts[0].toString()}` +
      `\n paid in ${this.monthlyCosts[3]} years`;
    let payedInterest = this.monthlyCosts[1];
    let principalLoan = this.monthlyCosts[4];

    const pieChart = new Chart({
      chart: {
        type: 'pie',
        plotBackgroundColor: 'white',
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: 'transparent',
      },
      credits: {
        enabled: false,
      },
      title: {
        text: totalAmountPaid,
        verticalAlign: 'middle',
        floating: true,
        margin: 12,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            formatter: function () {
              return '$' + this.y; // Adds a dollar sign before the y value
            },
          },
        },
        pie: {
          innerSize: '99%',
          borderWidth: 10,
          borderColor: '',
          slicedOffset: 10,
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
            connectorWidth: 0,
          },
        },
      },
      legend: {
        enabled: true,
        borderWidth: 1,
        borderColor: 'gray',
        align: 'center',
        verticalAlign: 'top',
        layout: 'horizontal',
        x: 0,
        y: 1,
      },
      tooltip: {
        pointFormat: '<b>${point.y}</b>',
      },
      series: [
        {
          name: '',
          type: 'pie',
          data: [
            {
              name: 'Total interest paid: ',
              y: payedInterest,
              color: '#C21EDE',
            },
            {
              name: 'Initial loan: ',
              y: principalLoan,
              color: '#72F8FA',
            },
          ],
        },
      ],
    });

    this.chart = pieChart;
  }

  makeResponsive() {
    if (this.chart) {
      this.chart.ref$.subscribe((chart) => {
        chart.reflow(); // Trigger reflow to make the chart responsive
      });
    }
  }
}
