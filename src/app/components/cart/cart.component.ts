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
    if (this.cartItems.length > 0) {
      const prices = this.cartItems.map((item) => item.product.price * item.quantity)
      this.totalPrice = prices.reduce((x, y) => x + y)
    }
  }

  updateTotalPrice(item: CartItem): void {
    if (item.quantity === 0) {
      this.productService.removeCartItem(item.product);
    }
    this.cartItems.filter((item) => item.quantity > 0)
    const prices = this.cartItems.map((item) => item.product.price * item.quantity)
    this.totalPrice = prices.reduce((x, y) => x + y)
    this.productService.updateCart(this.cartItems)
  }

  submitForm(): void {
    this.submissionService.addSubmission({ name: this.name, totalPrice: this.totalPrice})
  }

}
