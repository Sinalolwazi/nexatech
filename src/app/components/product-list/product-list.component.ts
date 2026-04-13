import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { PRODUCTS, Product } from '../../services/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, CommonModule, CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  cartService = inject(CartService);
  products: Product[] = PRODUCTS;
  addedProductId: number | null = null;

  addToCart(product: Product, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.addToCart(product);
    this.addedProductId = product.id;
    setTimeout(() => { this.addedProductId = null; }, 1500);
  }
}
