import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare const require: any;
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  options: any;
  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      const category = queryParams.category;
      console.log(category);
    });
    const xAxisData = [];
    const data1 = [];

    for (let i = 0; i < 50; i++) {
      xAxisData.push('category' + i);
      data1.push(i * 5);
    }

    this.options = {
      legend: {
        data: ['bar'],
        align: 'left'
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {
      },
      series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
          return idx * 10;
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };
  }

}
