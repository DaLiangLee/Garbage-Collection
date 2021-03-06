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
import { PieChartComponent } from './garbage-analysis/pie-chart/pie-chart.component';
import { TvNetworkListComponent } from './components/tv-network-list/tv-network-list.component';
import { TvNetworkFormComponent } from './components/tv-network-form/tv-network-form.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { TvShowsTableComponent } from './components/tv-shows-table/tv-shows-table.component';
import { TvNetworkDetailComponent } from './components/tv-network-detail/tv-network-detail.component';

import {BusyModule} from 'angular2-busy';
import { TvNetworkService } from 'src/app/services/tv-network.service';
import { ToastrModule } from 'ngx-toastr';
// import { TvNetworkService } from './services/tv-network.service';

@NgModule({
  declarations: [
    AppComponent,
    GarbageListComponent,
    AddGarbageComponent,
    GarbageAnalysisComponent,
    LineChartComponent,
    HistogramComponent,
    PieChartComponent,
    TvNetworkListComponent,
    TvNetworkFormComponent,
    HomeComponent,
    TvShowsTableComponent,
    TvNetworkDetailComponent
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
    HttpClientModule,
    BusyModule,
    ToastrModule.forRoot()
  ],
  providers: [TvNetworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
