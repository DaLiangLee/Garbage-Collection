import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GarbageListComponent } from './garbage-list/garbage-list.component';
import { AddGarbageComponent } from './add-garbage/add-garbage.component';
import { GarbageAnalysisComponent } from './garbage-analysis/garbage-analysis.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'garbageList', component: GarbageListComponent },
  { path: 'addGarbage', component: AddGarbageComponent },
  { path: 'dataAnalysis', component: GarbageAnalysisComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
