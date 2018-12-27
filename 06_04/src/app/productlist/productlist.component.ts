import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.fetchProducts();
    this.productsService.getProducts().subscribe(data => {
      this.products = [...data];
    });
  }
  addItemToCart(item) {
    this.productsService.addToCart(item._id);
  }
  itemInCart(item) {
    return this.productsService.findItemInCart(item._id);
  }
}
