import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  
  onSubmit(): void {
    // Processa os dados de checkout aqui
    this.items = this.cartService.clearCart();
    console.warn('You habe been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
