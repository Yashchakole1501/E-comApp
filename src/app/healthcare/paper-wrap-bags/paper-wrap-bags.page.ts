import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paper-wrap-bags',
  templateUrl: './paper-wrap-bags.page.html',
  styleUrls: ['./paper-wrap-bags.page.scss'],
})
export class PaperWrapBagsPage implements OnInit {

  constructor(private router: Router) { } // Inject Router in constructor

  ngOnInit(): void {
  }

  addToCart(): void {
    // Navigate to the add to cart page
    this.router.navigate(['/add-to-cart']);
  }
}
