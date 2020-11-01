import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import * as fromAprsActions from '../state/aprs.actions';
import { Aprs } from '../state/aprs.model';

import * as fromAprsSelectors from '../state/aprs.selectors';

@Component({
  selector: 'app-aprs-list',
  templateUrl: './aprs-list.component.html',
  styleUrls: ['./aprs-list.component.scss'],
})
export class AprsListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  aprs$: Observable<Aprs[]>;

  ngOnInit(): void {
    this.store.dispatch(fromAprsActions.loadAprs());

    this.aprs$ = this.store.pipe(select(fromAprsSelectors.selectAllAprs));
  }

  aprSelected(apr: Aprs) {
    this.store.dispatch(fromAprsActions.aprSelected({ apr }));
  }
}
