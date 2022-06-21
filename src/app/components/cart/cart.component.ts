import { Component, OnInit } from '@angular/core';
import { CartItem, ProductService } from 'src/app/services/product.service';
import { FormsModule } from '@angular/forms';
import { Submission, SubmissionService } from 'src/app/services/submission.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private productService: ProductService, private submissionService: SubmissionService) { }

  // Form details
  name: string = ""
  address: string = ""
  creditNumber: string = ""
  
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  ngOnInit(): void {
    this.cartItems = this.productService.getAllCartItems()
    this.updateTotalPrice()
  }

  updateTotalPrice(): void {
    const prices = this.cartItems.map((item) => item.product.price * item.quantity)
    this.totalPrice =  prices.reduce((x, y) => x + y)
  }

  submitForm(): void {
    console.log(this.name, this.totalPrice)
    this.submissionService.addSubmission({ name: this.name, totalPrice: this.totalPrice})
  }
}
