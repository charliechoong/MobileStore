import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {
  product: Product = {
    id: 0,
    name: "",
    description: "",
    price: 0,
    url: "",
  }
  productId = 0;
  quantity = 0;
  choiceLimit = 10;
  choices = [...Array(this.choiceLimit).keys()].map(v => v+1)
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = Number(params['id']);
    })
  
    this.productService.getItem(this.productId).subscribe(data => {
      if (data) {
        this.product = data;
      }
    })
  }

  submitForm(): void {
    if (this.quantity === 0) {
      return;
    }
    this.productService.addItemToCart(this.product, Number(this.quantity));
    alert(`${this.quantity} ${this.product.name} has been added to cart.`)
    this.quantity = 0;
  }

}
