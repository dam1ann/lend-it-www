import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CartManager} from "../../manager/cart.manager";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'ng-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductComponent {

  @Input() product;

  constructor(private cartMng: CartManager,
              private snackBar: MatSnackBar) {
  }

  onBuyMovie(element) {
    try {
      this.cartMng.addMovie(this.product);
      this.snackBar.open('Dodałeś nowy film :)', '', {
        duration: 500
      });
    }
    catch (ex) {
      this.snackBar.open('Masz już ten film w koszyku', '', {
        duration: 400
      });
    }
  }
}
