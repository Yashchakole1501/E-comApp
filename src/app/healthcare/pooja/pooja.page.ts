import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pooja',
  templateUrl: './pooja.page.html',
  styleUrls: ['./pooja.page.scss'],
})
export class PoojaPage implements OnInit {

  
  constructor(private router: Router) { } // Inject Router in constructor

  ngOnInit(): void {
  }

  addToCart(): void {
    // Navigate to the add to cart page
    this.router.navigate(['/add-to-cart']);
  }
}