import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { PRODUCTS } from '../store/market';
import * as Cart from "./../store/actions";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  product: ProductModel;

  constructor(private route: ActivatedRoute, private store: Store<any>) { }

  ngOnInit() {
    this.route.params.subscribe((p) => {
      let id = p['id']
      let result = Array.prototype.filter.call(PRODUCTS, (v) => v.id == id)
      if (result.length > 0) {
        this.product = result[0]
      }
    })
  }

  addToCart(product) {
    this.store.dispatch(new Cart.AddProduct(product))
  }
}
