import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []
  item: [Product, number] = [{id: 0, name: "", description: "", price: -1, url: ""}, 0]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllItems().subscribe(data => {
      this.products = data;
    })
  }

}
