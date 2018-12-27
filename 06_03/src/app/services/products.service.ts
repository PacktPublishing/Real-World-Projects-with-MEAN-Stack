import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  _products = [];
  _cart = [];
  productsSub;
  cartSub;
  constructor(private http: HttpClient) {
    this.productsSub = new BehaviorSubject<any[]>(this._products);
    this.cartSub = new BehaviorSubject<any[]>(this._cart);
  }

  fetchProducts() {
    this.http.get<any[]>('/api/products').subscribe(data => {
      this._products = [...data];
      this.productsSub.next([...this._products]);
    });
  }

  getProducts() {
    return this.productsSub.asObservable();
  }
  getCart() {
    return this.cartSub.asObservable();
  }
  addToCart(id) {
    const product = this.findItemInProducts(id);
    if (product.length !== 0) {
      if (this.findItemInCart(id).length) {
        this.removeFromCart(id);
      } else {
        this._cart.push(product[0]);
      }
      this.cartSub.next([...this._cart]);
    }
  }
  removeFromCart(id) {
      if (this.findItemInCart(id).length) {
        const item = this.findItemInCart(id)[0];
        const index = this._cart.indexOf(item);
        this._cart.splice(index, 1);
      }
      this.cartSub.next([...this._cart]);
  }
  findItemInCart(id) {
    const item = this._cart.filter(product => product.id === id);
    return item;
  }
  findItemInProducts(id) {
    const item = this._products.filter(product => product.id === id);
    return item;
  }
}
