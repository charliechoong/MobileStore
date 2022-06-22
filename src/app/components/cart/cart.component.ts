import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormsModule } from '@angular/forms';
import { SubmissionService } from 'src/app/services/submission.service';
import { Submission } from 'src/app/models/submission';
import { CartItem } from 'src/app/models/cartItem';

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
    if (this.cartItems.length>0) {
      this.updateTotalPrice()
    }
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
