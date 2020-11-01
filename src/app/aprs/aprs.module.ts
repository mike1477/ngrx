import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AprsRoutingModule } from './aprs-routing.module';
import { AprsItemComponent } from './aprs-item/aprs-item.component';
import { AprsListComponent } from './aprs-list/aprs-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromAprs from './state/aprs.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AprsEffects } from './state/aprs.effects';

@NgModule({
  declarations: [AprsItemComponent, AprsListComponent],
  imports: [
    CommonModule,
    AprsRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(fromAprs.aprsesFeatureKey, fromAprs.reducer),
    EffectsModule.forFeature([AprsEffects]),
  ],
})
export class AprsModule {}
