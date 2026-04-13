import { Injectable, signal, computed } from '@angular/core';
import { Product } from './product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  // Computed signals
  cartCount = computed(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0)
  );

  cartTotal = computed(() =>
    this.cartItems().reduce((total, item) => total + (item.product.price * item.quantity), 0)
  );

  getCartItems() {
    return this.cartItems;
  }

  addToCart(product: Product): void {
    const current = this.cartItems();
    const existing = current.find(item => item.product.id === product.id);
    if (existing) {
      this.cartItems.set(
        current.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      this.cartItems.set([...current, { product, quantity: 1 }]);
    }
  }

  removeFromCart(productId: number): void {
    this.cartItems.set(
      this.cartItems().filter(item => item.product.id !== productId)
    );
  }

  clearCart(): void {
    this.cartItems.set([]);
  }
}
