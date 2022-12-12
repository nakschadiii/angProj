import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_commons/models/product';
import { PRODUCTS } from 'src/app/_commons/datas';

@Component({
  selector: 'app-shit-one',
  templateUrl: './shit-one.component.html',
  styleUrls: ['./shit-one.component.scss']
})
export class ShitOneComponent implements OnInit {

  public products: Product[] = PRODUCTS;
  public product?: Product;

  constructor(
    private route: ActivatedRoute,
  ) { }
  public ngOnInit():void {
    this.route.params.subscribe(params => {
      this.product = this.products?.find(p => p.id == params['id']);
    });

  }
}


