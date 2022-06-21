import { Component, OnInit, Input } from '@angular/core';
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

  choiceLimit = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

}
