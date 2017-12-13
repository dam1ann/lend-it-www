import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import {CartManager} from "../../manager/cart.manager";

@Component({
  selector: 'ng-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductComponent implements OnInit, OnChanges {

  @Input() product;

  constructor(private cartMng: CartManager) {
  }

  onBuyMovie() {
    console.log('dodałeś');
    this.cartMng.addMovie(this.product);
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}
