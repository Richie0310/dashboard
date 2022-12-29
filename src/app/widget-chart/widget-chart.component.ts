import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-widget-chart',
  templateUrl: './widget-chart.component.html',
  styleUrls: ['./widget-chart.component.css']
})
export class WidgetChartComponent {

  Highcharts=Highcharts
  chartOptions={}

}
