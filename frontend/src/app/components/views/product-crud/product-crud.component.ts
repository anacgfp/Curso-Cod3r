import { HeaderService } from './../../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'cadastro de produto',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }
  navigateToProductCreate() : void {
    console.log('aqui')
    this.router.navigate(['/products/create'])
    console.log('aqui 2')
  }

}
