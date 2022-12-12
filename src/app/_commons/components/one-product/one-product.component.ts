import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.scss']
})
export class OneProductComponent implements OnInit {

  public counter: number = 1;
  @Input() public product!: Product;

  constructor() {}

  public ngOnInit(): void {}

  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter <= 1) {
      return;
    }
    this.counter--;
  }
}
