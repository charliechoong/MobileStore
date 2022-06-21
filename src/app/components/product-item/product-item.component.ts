import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {
    id: -1,
    name: "",
    price: 0,
    url: "",
    description: "",
  };

  //@Output() onSubmit = 

  choiceLimit: number = 10;
  choices: number[] = [...Array(this.choiceLimit).keys()].map(v => v+1);
  quantity: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(): void {
    alert(`${this.quantity} ${this.product.name} has been added to cart.`)
  }

}
