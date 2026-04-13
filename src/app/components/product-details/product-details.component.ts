import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { PRODUCTS, Product } from '../../services/product.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink, CommonModule, CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  cartService = inject(CartService);

  product: Product | undefined;
  relatedProducts: Product[] = [];
  added = false;
  quantity = 1;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.product = PRODUCTS.find(p => p.id === id);
      this.relatedProducts = PRODUCTS.filter(p => p.id !== id).slice(0, 3);
      this.added = false;
    });
  }

  addToCart(): void {
    if (this.product) {
      for (let i = 0; i < this.quantity; i++) {
        this.cartService.addToCart(this.product);
      }
      this.added = true;
      setTimeout(() => { this.added = false; }, 2000);
    }
  }

  increaseQty(): void { this.quantity++; }
  decreaseQty(): void { if (this.quantity > 1) this.quantity--; }
}
