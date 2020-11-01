import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApgsRoutingModule } from './apgs-routing.module';
import { ApgsListComponent } from './apgs-list/apgs-list.component';
import { ApgsItemComponent } from './apgs-item/apgs-item.component';
import { StoreModule } from '@ngrx/store';
import * as fromApgs from './state/apgs.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ApgsEffects } from './state/apgs.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ApgsListComponent, ApgsItemComponent],
  imports: [
    CommonModule,
    ApgsRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(fromApgs.apgsesFeatureKey, fromApgs.reducer),
    EffectsModule.forFeature([ApgsEffects]),
  ],
})
export class ApgsModule {}
