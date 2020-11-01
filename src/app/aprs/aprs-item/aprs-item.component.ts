import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { Aprs } from '../state/aprs.model';
import * as fromAprsSelectors from '../state/aprs.selectors';

@Component({
  selector: 'app-aprs-item',
  templateUrl: './aprs-item.component.html',
  styleUrls: ['./aprs-item.component.scss'],
})
export class AprsItemComponent implements OnInit {
  productId: string;

  Apr$: Observable<Aprs>;
  selectedApr$: Observable<Aprs>;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');

    this.Apr$ = this.store.pipe(
      select(fromAprsSelectors.selectEntityById, { id: this.productId })
    );

    this.Apr$.subscribe((apr) => console.log(apr));

    //Getting selected Apr

    this.store
      .pipe(select(fromAprsSelectors.selectedApr))
      .subscribe((apr) => console.log(apr));
  }
}
