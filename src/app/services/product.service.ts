import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  cart: CartItem[] = []

  getAllItems(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("../../assets/data.json")
  }

  getItem(id: number): Observable<Product|undefined> {
    return this.getAllItems().pipe(map(items => items.find(item => item.id === id)))
  }

  addItemToCart(product: Product, quantity: number): void {
    const res = this.cart.find(ci => ci['product'].id === product.id)
    if (res) {
      res.quantity += quantity
    } else {
      this.cart.push({ product, quantity })
    }
  }

  getAllCartItems(): CartItem[] {
    return this.cart;
  }
}
