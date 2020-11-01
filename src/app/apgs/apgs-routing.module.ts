import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApgsItemComponent } from './apgs-item/apgs-item.component';
import { ApgsListComponent } from './apgs-list/apgs-list.component';

const routes: Routes = [
  { path: 'apgs', component: ApgsListComponent },
  {
    path: 'apgs-item/:id',
    component: ApgsItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApgsRoutingModule {}
