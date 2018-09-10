import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GarbageListComponent } from './garbage-list/garbage-list.component';
import { AddGarbageComponent } from './add-garbage/add-garbage.component';
import { GarbageAnalysisComponent } from './garbage-analysis/garbage-analysis.component';
import { HistogramComponent } from './garbage-analysis/histogram/histogram.component';
import { LineChartComponent } from './garbage-analysis/line-chart/line-chart.component';
import { PieChartComponent } from './garbage-analysis/pie-chart/pie-chart.component';

const routes: Routes = [
  { path: '', redirectTo: 'garbageList', pathMatch: 'full' },
  { path: 'garbageList', component: GarbageListComponent },
  { path: 'addGarbage', component: AddGarbageComponent },
  { path: 'dataAnalysis', component: GarbageAnalysisComponent },
  { path: 'dataAnalysisByCategory/:condition', component: GarbageAnalysisComponent },
  { path: 'dataAnalysisByDate/:condition', component: GarbageAnalysisComponent },
  { path: 'histogram', component: HistogramComponent },
  { path: 'lineChart', component: LineChartComponent },
  { path: 'pieChart', component: PieChartComponent },
  { path: 'histogram/:condition', component: HistogramComponent },
  { path: 'lineChart/:condition', component: LineChartComponent },
  { path: 'pieChart/:condition', component: PieChartComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
