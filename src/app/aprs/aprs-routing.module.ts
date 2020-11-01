import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AprsItemComponent } from './aprs-item/aprs-item.component';
import { AprsListComponent } from './aprs-list/aprs-list.component';

const routes: Routes = [
  { path: '', component: AprsListComponent },
  {
    path: 'aprs-item/:id',
    component: AprsItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AprsRoutingModule {}
