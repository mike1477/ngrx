import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-apgs-item',
  templateUrl: './apgs-item.component.html',
  styleUrls: ['./apgs-item.component.scss'],
})
export class ApgsItemComponent implements OnInit {
  productId: string;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
  }
}
