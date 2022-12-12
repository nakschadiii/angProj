import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../datas';
import { Product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  public products?: Product[] = PRODUCTS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
