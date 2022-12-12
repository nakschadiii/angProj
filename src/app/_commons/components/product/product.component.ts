import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() public img!: string;
  @Input() public preview!: string[];
  @Input() public title!: string;
  @Input() public solde!: boolean;
  @Input() public product!: Product;
  
  constructor() { }

  ngOnInit(): void {
  }

}
