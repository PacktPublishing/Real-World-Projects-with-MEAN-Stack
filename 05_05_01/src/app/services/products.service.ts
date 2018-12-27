import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  _products = [];
  _cart = [];
  productsSub;
  cartSub;
  constructor() {
    this.productsSub = new BehaviorSubject<any[]>(this._products);
    this.cartSub = new BehaviorSubject<any[]>(this._cart);
  }

  fetchProducts() {
    const items = [
      {
        id: 1,
        name: 'Course name',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Explicabo officia commodi quo impedit. Culpa molestiae perspiciatis architecto in dignissimos incidunt`,
        image: 'http://placehold.it/355x225',
        price: 12
      },
      {
        id: 2,
        name: 'Course name two',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Explicabo officia commodi quo impedit. Culpa molestiae perspiciatis architecto in dignissimos incidunt`,
        image: 'http://placehold.it/355x225',
        price: 6
      },
      {
        id: 3,
        name: 'Course name three',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Explicabo officia commodi quo impedit. Culpa molestiae perspiciatis architecto in dignissimos incidunt`,
        image: 'http://placehold.it/355x225',
        price: 13
      },
      {
        id: 4,
        name: 'Course name four',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Explicabo officia commodi quo impedit. Culpa molestiae perspiciatis architecto in dignissimos incidunt`,
        image: 'http://placehold.it/355x225',
        price: 16
      },
      {
        id: 5,
        name: 'Course name five',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Explicabo officia commodi quo impedit. Culpa molestiae perspiciatis architecto in dignissimos incidunt`,
        image: 'http://placehold.it/355x225',
        price: 121
      },
      {
        id: 6,
        name: 'Course name six',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Explicabo officia commodi quo impedit. Culpa molestiae perspiciatis architecto in dignissimos incidunt`,
        image: 'http://placehold.it/355x225',
        price: 11
      },
      {
        id: 7,
        name: 'Course name seven',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Explicabo officia commodi quo impedit. Culpa molestiae perspiciatis architecto in dignissimos incidunt`,
        image: 'http://placehold.it/355x225',
        price: 119
      },
      {
        id: 8,
        name: 'Course name eight',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Explicabo officia commodi quo impedit. Culpa molestiae perspiciatis architecto in dignissimos incidunt`,
        image: 'http://placehold.it/355x225',
        price: 8
      },
      {
        id: 9,
        name: 'Course name nine',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Explicabo officia commodi quo impedit. Culpa molestiae perspiciatis architecto in dignissimos incidunt`,
        image: 'http://placehold.it/355x225',
        price: 99
      },
    ];
      this._products = [...items];
      this.productsSub.next([...this._products]);
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
