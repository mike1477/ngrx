import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromApgsActions from '../state/apgs.actions';

@Component({
  selector: 'app-apgs-list',
  templateUrl: './apgs-list.component.html',
  styleUrls: ['./apgs-list.component.scss'],
})
export class ApgsListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fromApgsActions.loadApgs());
  }
}
