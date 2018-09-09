import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GarbageListComponent } from './garbage-list/garbage-list.component';
import { AddGarbageComponent } from './add-garbage/add-garbage.component';
import { GarbageAnalysisComponent } from './garbage-analysis/garbage-analysis.component';
import { AppRoutingModule } from './/app-routing.module';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { NgxEchartsModule } from 'ngx-echarts';
import { LineChartComponent } from './garbage-analysis/line-chart/line-chart.component';
import { HistogramComponent } from './garbage-analysis/histogram/histogram.component';
import {TabsModule} from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [
    AppComponent,
    GarbageListComponent,
    AddGarbageComponent,
    GarbageAnalysisComponent,
    LineChartComponent,
    HistogramComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    TabsModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    AngularMultiSelectModule,
    NgxEchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
