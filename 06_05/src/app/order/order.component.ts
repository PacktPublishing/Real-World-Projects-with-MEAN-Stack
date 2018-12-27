import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any>('/api/orders').subscribe(data => this.orders = [...data]);
  }
  totalEarnings(orders) {
    return orders.reduce((acc, cur) => acc + this.orderTotal(cur.items), 0);
  }
  totalItems(orders) {
    return orders.reduce((acc, cur) => acc + cur.items.length, 0);
  }
  orderTotal(items) {
    return items.reduce((acc, cur) => acc + cur.price, 0);
  }

}
