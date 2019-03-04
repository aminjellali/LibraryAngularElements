import { Sale } from './../../shared/sales';
import Swal from 'sweetalert2';
import { BarChartService } from './bar-chart.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BarChartComponent implements OnInit {

  libraryName: String = "readers heaven";
  // used to only shopw the plot when data is avalaible.
  authorize_plot = false;


  /* -------- Api Configs --------   */
  // define the chart type 
  barChartType: string = 'bar';
  // chart options
  // set responsive to true for screen adaption
  barChartOptions: any = {
    responsive: true,
    tooltips: {
      // define e callback for the label
      callbacks: {
        // define an after label text
        afterLabel: function (tooltipItem, data) {
          // after label text
          var label = "total money :" + data.datasets[tooltipItem.datasetIndex].money[tooltipItem.index];
          return label;
        }
      }
    }
  };


  // initilize the data array
  salesData: any[] = [{
    data: [],
    label: 'Sales by Library Name',
    // define an an attribute money in the data object to later render the total money...
    money: [],
  }];
  // initilize labels 
  salesLabels: Array<String> = [];

  constructor(public barChartService: BarChartService) {
    // no implelementation here
  }
  ngOnInit() {
    // no implelementation here
  }

  callSalesService() {
    this.barChartService.getAllSalesByLibraryName(this.libraryName)
      .subscribe(
        result => {
          // define two new sets of arrays to seperate
          // values and labels
          let serviceData: Array<number> = [];
          let labels: Array<String> = [];
          let totalMoney: Array<number> = [];
          // feed the data to the local variables
          result.map(sale => {
            labels.push(sale.bookName);
            serviceData.push(sale.sales);
            totalMoney.push(sale.sales * sale.pricePerItem);
          });
          // set the attribute data of the first object of the array
          this.salesData[0].data = serviceData;
          // pass labels the api attribute 
          this.salesLabels = labels;
          // inject the total money to the money prop of the object
          this.salesData[0].money = totalMoney;
          // set to true to make the plot visible
          this.authorize_plot = true;

        },
        error => {
          Swal({
            type: 'error',
            title: 'Oops...',
            text: error.error.message
          });
        }
      );
  }
}
