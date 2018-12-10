import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as Cart from "./../store/actions";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {

  cart: Observable<Array<any>>
  constructor(private store: Store<any>) {
    const cart = this.store.select('cart');
    console.log(cart);
    this.cart = cart;
  }

  ngOnInit() { }

  removeFromCart(product) {
    this.store.dispatch(new Cart.RemoveProduct(product))
  }

}
